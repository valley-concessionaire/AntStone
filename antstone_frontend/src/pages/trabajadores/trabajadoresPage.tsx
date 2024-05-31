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
import { TableConf } from "../../components/tableContent"

import { Employee, colTrabajadores } from "./trabajadoresColumns"
import { TrabajadoresDataTable } from "./trabajadoresDataTable"
import { Fragment, useEffect, useState } from "react"

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { TrabajadorConfig } from "../../components/trabajadorConfig"

export function TrabajadoresPage2() {
  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <TableConf />
    </div>
  )
}

async function getData(): Promise<Employee[]> {
  // Fetch data from your API here.
  return [
    {
      id: "jj212u98",
      name: "Pepe",
      status: "operando",
      role: "Capataz",
      asignments: 2,
    },
    {
      id: "21hhs812",
      name: "Juan",
      status: "inactivo",
      role: "Capataz",
      asignments: 5,
    },
    {
      id: "s299021s",
      name: "Roberto",
      status: "operando",
      role: "Capataz",
      asignments: 1,
    },
    {
      id: "s289823",
      name: "Maria",
      status: "operando",
      role: "Maestro",
      asignments: 2,
    },
    {
      id: "8s8a67gh1",
      name: "Jonas",
      status: "operando",
      role: "Capataz",
      asignments: 9,
    },
    {
      id: "092jdj32",
      name: "Sara",
      status: "inactivo",
      role: "Capataz",
      asignments: 6,
    },
    {
      id: "21908wu",
      name: "Lorena",
      status: "operando",
      role: "Director de Obra",
      asignments: 0,
    },
    {
      id: "s92y7ye",
      name: "Mario",
      status: "inactivo",
      role: "Capataz",
      asignments: 3,
    },
    {
      id: "21yhs79y2",
      name: "Karla",
      status: "inactivo",
      role: "Gerente",
      asignments: 2,
    },
  ]
}

interface TrabajadoresPageProps<search> {
  search: string
}

function TrabajadoresPage<search> ({
  search
  }: TrabajadoresPageProps<search>) {
  const [data, setData] = useState<Employee[] | null>(null); // Initialize data to null to avoid potential errors
  const [showObraConfig, setShowObraConfig] = useState(false)
  const [statusFilter, setStatusFilter] = useState("")
  const [roleFilter, setRoleFilter] = useState("")

  const [posState, setPosState] = useState("Todo")
  const [posRole, setPosRole] = useState("Todo")

  const [searchName, setSearchName] = useState("")

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

  useEffect(() => {
    const filtraNombre = () => {
      setSearchName(search)
    };

    filtraNombre();
}, [search])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData(); // Call your asynchronous function
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors appropriately (optional)
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on mount

  if (!data) {
    return <p>No data available.</p>; // Handle empty data scenario (optional)
  }

  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-7 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Estado : {posState}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={posState} onValueChange={setPosState}>
              <DropdownMenuRadioItem onSelect={() => setStatusFilter("")} value="Todo">Todo</DropdownMenuRadioItem>
              <DropdownMenuRadioItem onSelect={() => setStatusFilter("Operando")} value="Operando">Operando</DropdownMenuRadioItem>
              <DropdownMenuRadioItem onSelect={() => setStatusFilter("Inactivo")} value="Inactivo">Inactivo</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>


        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-7 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Rol : {posRole}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={posRole} onValueChange={setPosRole}>
              <DropdownMenuRadioItem onSelect={() => setRoleFilter("")} value="Todo">Todo</DropdownMenuRadioItem>
              <DropdownMenuRadioItem onSelect={() => setRoleFilter("Gerente")} value="Gerente">Gerente</DropdownMenuRadioItem>
              <DropdownMenuRadioItem onSelect={() => setRoleFilter("Capataz")} value="Capataz">Capataz</DropdownMenuRadioItem>
              <DropdownMenuRadioItem onSelect={() => setRoleFilter("Director")} value="Director">Director</DropdownMenuRadioItem>
              <DropdownMenuRadioItem onSelect={() => setRoleFilter("Maestro")} value="Maestro">Maestro</DropdownMenuRadioItem>
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
      <TrabajadoresDataTable columns={colTrabajadores(setShowObraConfig)} data={data} filteredStatus={statusFilter} filteredRole={roleFilter} searching={searchName}/>
      <TrabajadorConfig isVisible={showObraConfig} onClose={() => setShowObraConfig(false)} />
    </div>
  )
}

export default TrabajadoresPage