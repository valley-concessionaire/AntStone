"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Fragment, useEffect, useState } from "react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Work = {
    id: string
    name: string
    cost: number
    status: "pendiente" | "procesando" | "terminada" | "cancelada"
    master: string
}

export function colObras(trig:(b:boolean)=>void) {

    const columns: ColumnDef<Work>[] = [
        {
            id: "select",
            header: ({ table }) => (
            <Checkbox
                checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
            accessorKey: "master",
            header: ({ column }) => {
            return (
                <div>
                    Maestro
                    <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>
            )
            },
            cell: ({ row }) => <div className="capitalize">{row.getValue("master")}</div>,
        },
        {
            accessorKey: "cost",
            header: () => <div className="">Costo</div>,
            cell: ({ row }) => {
            const amount = parseFloat(row.getValue("cost"))
    
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                            <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(work.id)}
                            >
                                Copy work ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={ ()=>trig(true) }>Editar</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    return (
        columns
    )
}

export const columxns: ColumnDef<Work>[] = [
    {
        id: "select",
        header: ({ table }) => (
        <Checkbox
            checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
        accessorKey: "master",
        header: ({ column }) => {
        return (
            <div>
                Maestro
                <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            </div>
        )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("master")}</div>,
    },
    {
        accessorKey: "cost",
        header: () => <div className="">Costo</div>,
        cell: ({ row }) => {
        const amount = parseFloat(row.getValue("cost"))

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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(work.id)}
                        >
                            Copy work ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => console.log("AYUDA")}>Editar</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

