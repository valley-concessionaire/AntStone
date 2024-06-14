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

import { CurrentEmployeeModelReturnedFromApi, Employee, colTrabajadores } from "./trabajadoresColumns"
import { TrabajadoresDataTable } from "./trabajadoresDataTable"
import { Fragment, useEffect, useState } from "react"

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { TrabajadorConfig } from "../../components/trabajadorConfig"
import requests from "../../shared/api/agent"
import { GetACapatazEndpoint, GetAyudanteDeAbanilEndpoint } from "../../shared/api/api-urls"
import { useParams } from 'react-router-dom';
import TableSkeleton from "../../../src/shared/components/TableSkeleton"
import { Input } from "../../../src/components/ui/input"


export function TrabajadoresPage2() {
  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <TableConf />
    </div>
  )
}

interface Props<search, isForEditing> {
  search: string
  isForEditing: boolean
}


function TrabajadoresPage<search, isForEditing>({
  search,
  isForEditing
}: Props<search, isForEditing>) {

  const [data, setData] = useState<CurrentEmployeeModelReturnedFromApi[]>([]); // Initialize data to null to avoid potential errors
  const [showObraConfig, setShowObraConfig] = useState(false)
  const [statusFilter, setStatusFilter] = useState("")
  const [roleFilter, setRoleFilter] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
      setSearchName(search ?? '')
    };

    filtraNombre();
  }, [search])

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const fetchedData = await requests.get(GetACapatazEndpoint); // Call your asynchronous function
        setData(fetchedData);
        setIsLoading(false);
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
      <div className="grid flex-1 items-start gap-2 sm:px-6 md:gap-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center py-4">
            <Input
            placeholder="Filtrar por nombre..."
            onChange={(event) =>
              setSearchName(event.target.value)
            }
            className="w-60"
            />
          </div>
          {isForEditing ?
          <div className="ml-auto flex gap-2">
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
                Crear Trabajador
              </span>
            </Button>
          </div>
          : null}
        </div>
        <TrabajadoresDataTable
          columns={colTrabajadores(isForEditing , setShowObraConfig)}
          data={data.map(employeeResponse => ({
            id: employeeResponse.id.toString(),
            name: `${employeeResponse.first_name} ${employeeResponse.last_name}`,
            status: `${employeeResponse.is_active}`,
            role: 'Maestro',
            asignments: 0
          } as unknown as Employee))}
          filteredStatus={statusFilter}
          filteredRole={roleFilter}
          searching={searchName}
          /** editingView={isForEditing}*/
          />
        {isForEditing ? 
          <TrabajadorConfig
            isVisible={showObraConfig}
            onClose={() => setShowObraConfig(false)} />
          : null}
      </div>}
  </>

}

export default TrabajadoresPage
