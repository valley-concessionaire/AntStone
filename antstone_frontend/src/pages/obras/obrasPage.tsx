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
import { GetObrasEndpoint, PostObrasEndpoint } from "../../../src/shared/api/api-urls"
import TableSkeleton from "../../../src/shared/components/TableSkeleton"
import { ProgressDemo } from "../../components/progressDemo"

async function getData(): Promise<Work[]> {
  // Fetch data from your API here.
  return [
    {
      id: "Obra1",
      name: "Obra 1",
      cost: 316,
      status: "pendiente",
      master: "Juan",
    },
    {
        id: "3u1reuv4",
        name: "Obra 2",
        cost: 242,
        status: "cancelada",
        master: "Pedro",
    },
    {
        id: "derv1ws0",
        name: "Obra 3",
        cost: 837,
        status: "procesando",
        master: "Cecilia",
    },
    {
        id: "5k212153ae",
        name: "Obra 4",
        cost: 874,
        status: "terminada",
        master: "Nemo",
    },
    {
      id: "5kmh2hae",
      name: "Obra 5",
      cost: 102,
      status: "terminada",
      master: "Nemo",
    },
    {
      id: "5kma32jkhe",
      name: "Obra 6",
      cost: 870,
      status: "cancelada",
      master: "Maria",
    },
    {
      id: "23809h3ae",
      name: "Obra 7",
      cost: 273,
      status: "cancelada",
      master: "Pedro",
    },
    {
      id: "32io9a53ae",
      name: "Obra 8",
      cost: 834,
      status: "procesando",
      master: "Pedra",
    },
    {
      id: "k2j3983ae",
      name: "Obra 9",
      cost: 816,
      status: "cancelada",
      master: "Piedra",
    },
    {
      id: "j239783ae",
      name: "Obra 10",
      cost: 294,
      status: "cancelada",
      master: "Sancocho",
    },
    {
      id: "sakloi18w",
      name: "Obra 11",
      cost: 729,
      status: "terminada",
      master: "Juanes",
    },
  ]
}

interface ObrasPageProps<search> {
  search: string
}

function ObrasPage<search> ({
  search
  }: ObrasPageProps<search>) {
  const [data, setData] = useState<Work[] | null>(null); // Initialize data to null to avoid potential errors
  const [showObraConfig, setShowObraConfig] = useState(false)
  const [statusFilter, setstatusFilter] = useState("")
  const [searchName, setSearchName] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [works, setWorks] = useState<Work | null>(null);

  const [position, setPosition] = useState("Todo")


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

  const handlerEditWork = (visible: boolean, work: Work) => {
    setWorks(work)
    setShowObraConfig(visible)
  }

  useEffect(() => {
    const filtraNombre = () => {
      setSearchName(search)
    };

    filtraNombre();
}, [search])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const r = await requests.get(GetObrasEndpoint());
        const fetchedData = await  getData()//requests.get(GetObrasEndpoint()); // Call your asynchronous function
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

  return <>
    {isLoading ?
      Skeleton() :
    <div className="grid flex-1 items-start gap-2 sm:px-6 md:gap-4">
      <div className="flex items-center gap-2">
        <div >
          <div className="flex items-center ">
            <Input
            placeholder="Filtrar por nombre..."
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
                <DropdownMenuRadioItem onSelect={() => setstatusFilter("Procesando")} value="Procesando">Procesando</DropdownMenuRadioItem>
                <DropdownMenuRadioItem onSelect={() => setstatusFilter("Terminada")} value="Terminada">Terminada</DropdownMenuRadioItem>
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
        data={data??[]} 
        filtered={statusFilter} 
        searching={searchName} />
      <ObraConfig 
        onSave={updateWorkRequest}
        isVisible={showObraConfig} 
        onClose={() => setShowObraConfig(false)} 
      />
    </div>
  }
  </>
}

export default ObrasPage;
