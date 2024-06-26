"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Pen, Pencil } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"
import { Value } from "@radix-ui/react-select"
import translateStatus from "./models/StatusTraslation"
import Gerente from "./models/gerente"
import Director from "./models/director"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Work = {
    id: number
    nombre: string,
    fecha_inicio: string,
    fecha_fin: string,
    presupuesto: number,
    estado: string,
    gerente: string,
    director: string
}

export function colObras(trig:(b:boolean, work:Work) => void) {

    const columns: ColumnDef<Work>[] = [
        {
            id: "select",
            header: ({ table }) => (
            <Checkbox
                checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    /*antes: table.toggleAllPageRowsSelected(!!value)*/
                    table.toggleAllRowsSelected(!!value)
                    }
                aria-label="Select all"
            />
            ),
            cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "nombre",
            header: "Nombre",
            cell: ({ row }) => (
            <div className="capitalize">{row.getValue("nombre")}</div>
            ),
        },
        {
            accessorKey: "estado",
            header: "Estado",
            cell: ({ row }) => (
            <div className="capitalize">{ translateStatus(row.getValue("estado"))}</div>
            ),
        },
        {
            accessorKey: "director",
            header: "Maestro",
            cell: ({ row }) => (
            <div className="capitalize">{row.getValue("director")}</div>
            ),
        },
        {
            accessorKey: "presupuesto",
            header: ({ column }) => {
                return (
                    <div>
                        Costo
                        <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        >
                            <ArrowUpDown className="ml-2 h-4 w-4"/>
                        </Button>
                    </div>
                )
            },
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("presupuesto"))
    
                // Format the amount as a dollar amount
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount)
    
                return <div className="font-medium">{formatted}</div>
            },
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const work = row.original

                return (
                    <div>
                        <Button variant="ghost" className="h-8 w-8 p-0" onClick={ ()=>trig(true, work) }>
                            <span className="sr-only">Open menu</span>
                            <Pencil className="h-4 w-4"/>
                        </Button>
                        <Button 
                            variant="ghost" 
                            className="h-8 w-8 p-0" 
                            onClick={() => navigator.clipboard.writeText(`${work.id}`)}>
                        {work.id}
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