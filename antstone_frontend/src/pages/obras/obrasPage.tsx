import { Fragment, useEffect, useState } from "react"
import {
  File,
  ListFilter,
  PlusCircle,
} from "lucide-react"

import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Input } from "../../components/ui/input"

import { Work, colObras } from "./obrasColumns"
import { ObrasDataTable } from "./obrasDataTable"

import { ObraConfig } from "../../components/obraConfig"
import requests from "../../../src/shared/api/agent"
import { GetObrasEndpoint, GetTareasByObraIdEndpoint, PostObrasEndpoint } from "../../../src/shared/api/api-urls"
import TableSkeleton from "../../../src/shared/components/TableSkeleton"
import Gerente from "./models/gerente"
import Director from "./models/director"
import { TareaDeObra } from "./models/tarea-obra"

import { ProgressDemo } from "../../components/progressDemo"
import LoadingIndicator from "../../../src/shared/components/LoadingIndicator"

interface ObrasPageProps<search> {
  search: string
}

interface WorkResponse {
  id: number
  nombre: string,
  fecha_inicio: string,
  fecha_fin: string,
  presupuesto: number,
  estado: string,
  gerente: Gerente,
  director: Director
}

function ObrasPage<search> ({
  search
  }: ObrasPageProps<search>) {
  const [data, setData] = useState<WorkResponse[] | null>(null); // Initialize data to null to avoid potential errors
  const [showObraConfig, setShowObraConfig] = useState(false)
  const [statusFilter, setstatusFilter] = useState("")
  const [searchName, setSearchName] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [works, setWorks] = useState<Work | null>(null);
  const [tareasByObras, setTareasByObras] = useState<TareaDeObra[]>([]);

  const [position, setPosition] = useState("Todo")
  const [loadingObra, setLoadingObra] = useState(false)


  useEffect(() => {
    if (showObraConfig) {
    document.body.classList.add('overflow-hidden');
    } else {
    document.body.classList.remove('overflow-hidden');
    }
    return () => {
    document.body.classList.remove('overflow-hidden');
    };
  }, [showObraConfig]);

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const updateWorkRequest = async () => {
    try {
      if (works) {
        /*  const obra = {
          nombre: `Obra Fake ${getRandomInt(1, 100)}`,
          fecha_inicio: "2024-01-01T00:00:00.000Z",
          fecha_fin: "2025-12-31T00:00:00.000Z",
          presupuesto: "1000.00",
          estado: "IN_PROGRESS",
          director: "Juan",
          gerente: "María"
        }; */
        await requests.post(PostObrasEndpoint(), works)};
    } catch (error) {
      console.error('Error updating data:', error); // Handle errors appropriately
    } 
  }

  const handlerEditWork = async (visible: boolean, work: Work)  => {
    setWorks(work)
    setLoadingObra(true)
    try {
       setWorks(work) 
       const tareaDeObra = await requests.get(GetTareasByObraIdEndpoint(work.id));
       setTareasByObras(tareaDeObra);
       setLoadingObra(false)
       setShowObraConfig(visible);
    }
    catch (error) {
      setLoadingObra(false)
      console.log(error)
    }
    
  }

  useEffect(() => {
    const filtraNombre = () => {
      setSearchName(search ?? '')
    };

    filtraNombre();
  }, [search])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const fetchedData = await requests.get(GetObrasEndpoint()); // Call your asynchronous function
        setData(fetchedData);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors appropriately (optional)
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on mount

  const Skeleton = () => <TableSkeleton />

  return <div className="relative">
  { loadingObra && 
  <div className="absolute inset-0 flex items-center justify-center z-[1000]">
    <LoadingIndicator />
  </div>
  }  
  
    {isLoading ?
      Skeleton() :
    <div className="grid flex-1 items-start gap-2 sm:px-6 md:gap-4">
      <div className="flex items-center gap-2">
        <div >
          <div className="flex items-center ">
            <Input
            placeholder="Filtrar por nombre...2"
            onChange={(event) =>
              setSearchName(event.target.value)
            }
            className="w-60"
            />
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Estado : {position}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem onSelect={() => setstatusFilter("")} value="Todo">Todo</DropdownMenuRadioItem>
                <DropdownMenuRadioItem onSelect={() => setstatusFilter("Pendiente")} value="Pendiente">Pendiente</DropdownMenuRadioItem>
                <DropdownMenuRadioItem onSelect={() => setstatusFilter("En Progreso")} value="En Progreso">En Progreso</DropdownMenuRadioItem>
                <DropdownMenuRadioItem onSelect={() => setstatusFilter("Completado")} value="Completado">Completado</DropdownMenuRadioItem>
                <DropdownMenuRadioItem onSelect={() => setstatusFilter("Cancelada")} value="Cancelada">Cancelada</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-7 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Exportar
            </span>
          </Button>
          <Button size="sm" className="h-7 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Crear Obra
            </span>
          </Button>
        </div>
      </div>
      <ObrasDataTable 
        columns={colObras(handlerEditWork)} 
        data={data?.map((work) => (
          {
            id: work.id,
            nombre: work.nombre,
            fecha_inicio: work.fecha_inicio,
            fecha_fin: work.fecha_fin,
            presupuesto: work.presupuesto,
            estado: work.estado,
            director: work.director.first_name + " " + work.director.last_name,
            gerente: work.gerente.first_name + " " + work.gerente.last_name
          }
        ))??[]} 
        filtered={statusFilter} 
        searching={searchName} />
        {
          tareasByObras && works &&
          <ObraConfig 
            onSave={updateWorkRequest}
            isVisible={showObraConfig}
            onClose={() => setShowObraConfig(false)}
            obra={works} 
            tareas={tareasByObras}
          />
        }
    </div>
  }
  </div>
}

export default ObrasPage;
