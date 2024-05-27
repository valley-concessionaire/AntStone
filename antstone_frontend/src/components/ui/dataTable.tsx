"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Checkbox } from "./checkbox"
import { Button } from "./button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu"
import { Input } from "./input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./table"

const data: Payment[] = [
    {
        id: "Obra1",
        nombre: "Obra 1",
        amount: 316,
        status: "terminada",
        master: "Juan",
    },
    {
        id: "3u1reuv4",
        nombre: "Obra 2",
        amount: 242,
        status: "terminada",
        master: "Pedro",
    },
    {
        id: "derv1ws0",
        nombre: "Obra 3",
        amount: 837,
        status: "procesando",
        master: "Cecilia",
    },
    {
        id: "5kma53ae",
        nombre: "Obra 4",
        amount: 874,
        status: "terminada",
        master: "Nemo",
    },
]

export type Payment = {
    id: string
    nombre: string
    amount: number
    status: "pendiente" | "procesando" | "terminada" | "cancelada"
    master: string
}

export const columns: ColumnDef<Payment>[] = [
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
        accessorKey: "nombre",
        header: "Nombre",
        cell: ({ row }) => (
        <div className="capitalize">{row.getValue("nombre")}</div>
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
        accessorKey: "amount",
        header: () => <div className="">Costo</div>,
        cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))

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
        const payment = row.original

        return (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        )
        },
    },
]

export function DataTableDemo() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [pagination, setPagination] = React.useState({
        pageIndex: 0, //initial page index
        pageSize: 7, //default page size
        });
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
        pagination,
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
        },
    })

    return (
        <div className="w-full">
        <div className="flex items-center py-4">
            <Input
            placeholder="Filter masters..."
            value={(table.getColumn("master")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("master")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                    Columnas <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                        return (
                        <DropdownMenuCheckboxItem
                            key={column.id}
                            className="capitalize"
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                            }
                        >
                            {column.id}
                        </DropdownMenuCheckboxItem>
                        )
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="ml-10">
                +
            </Button>
        </div>
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                        return (
                            <TableHead key={header.id}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </TableHead>
                        )
                        })}
                    </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"} 
                        >
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id} >
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                                </TableCell>
                            ))}
                            <Button variant="outline">
                                -
                            </Button>
                        </TableRow>
                    ))
                    ) : (
                    <TableRow>
                        <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                        >
                        No results.
                        </TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4 ">
            <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Previous
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Next
            </Button>
            </div>
        </div>
    </div>
    )
}