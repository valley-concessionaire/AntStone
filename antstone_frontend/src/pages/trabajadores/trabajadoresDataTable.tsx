import { Badge } from "../../components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { TrabajadorConfig } from "../../components/trabajadorConfig"
import { Fragment, useEffect, useState } from "react"




import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"
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
import { Input } from "../../components/ui/input"

interface DataTableProps<TData, TValue, filteredStatus, filteredRole> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  filteredStatus: string
  filteredRole: string
}

export function TrabajadoresDataTable<TData, TValue, filteredStatus, filteredRole>({
  columns,
  data,
  filteredStatus,
  filteredRole,
  }: DataTableProps<TData, TValue, filteredStatus, filteredRole>) {

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


  useEffect(() => {
    const filtrado = () => {
      table.getColumn("status")?.setFilterValue(filteredStatus)
      table.getColumn("role")?.setFilterValue(filteredRole)
    };
  
    filtrado();
  }, [filteredStatus, filteredRole])


  return (
      <Fragment>
          <div className="w-full">
              <div className="flex items-center py-4">
                  <Input
                  placeholder="Filtrar por nombre..."
                  value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                  onChange={(event) =>
                      table.getColumn("name")?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm"
                  />
              </div>
          </div>

          <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                  <CardTitle>Trabajadores</CardTitle>
                  <CardDescription>
                      Listado de todos los trabajadores.
                  </CardDescription>
              </CardHeader>
              <CardContent>
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
                                      <TableCell key={cell.id}>
                                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                      </TableCell>
                                      ))}
                                  </TableRow>
                                  ))
                              ) : (
                                  <TableRow>
                                      <TableCell colSpan={columns.length} className="h-24 text-center">
                                          No results.
                                      </TableCell>
                                  </TableRow>
                              )}
                          </TableBody>
                      </Table>
                  </div>
              </CardContent>
          </Card>
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
      </Fragment>
  )
}