"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Pen, Pencil } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Employee{
    id: string,
    name: string,
    status: boolean,
    role: "Gerente" | "Capataz" | "Director de Obra" | "Maestro",
    asignments: number
}

export interface CurrentEmployeeModelReturnedFromApi {
        id: number,
        is_superuser: boolean,
        email: string,
        first_name: string,
        last_name: string,
        is_staff: boolean,
        is_active: boolean,
        date_joined: string,
        experiencia: string,
        certificaciones: string,
}

export function colTrabajadores(isForEditing: boolean, trig:(b:boolean)=>void) {

    const columns: ColumnDef<Employee>[] = [
        {
            id: "select",
            header: ({ table }) => (isForEditing ? 
            <Checkbox
                checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
            : null),
            cell: ({ row }) => (isForEditing ?
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
            : null),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "name",
            header: "Nombre",
            cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
            ),
        },
        {
            accessorKey: "status",
            header: "Estado",
            cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
            ),
        },
        {
            accessorKey: "role",
            header: "Rol",
            cell: ({ row }) => (
            <div className="capitalize">{row.getValue("role")}</div>
            ),
        },
        {
            accessorKey: "asignments",
            header: ({ column }) => {
                return (
                    <div>
                        Asignaciones
                        <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="ml-4"
                        >
                            <ArrowUpDown className="h-4 w-4"/>
                        </Button>
                    </div>
                )
            },
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const employee = row.original

                return (
                    <div>
                        {isForEditing ?
                            <Button variant="ghost" className="h-8 w-8 p-0" onClick={ ()=>trig(true) }>
                                <span className="sr-only">Open menu</span>
                                <Pencil className="h-4 w-4"/>
                            </Button>
                            :
                            <Button variant="outline" className="h-8 w-full p-0 mr-2">
                                Añadir
                            </Button>
                        }
                        <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => navigator.clipboard.writeText(employee.id)}>
                            ID
                        </Button>
                    </div>
                )
            },
        },
    ]

    return (
        columns
    )
}