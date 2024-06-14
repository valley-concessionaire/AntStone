import {
  ChevronLeft,
  PlusCircle,
  Upload,
} from "lucide-react"

import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { Textarea } from "../components/ui/textarea"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"


import {
  ToggleGroup,
  ToggleGroupItem,
} from "../components/ui/toggle-group"
import { AccordionHeader } from "@radix-ui/react-accordion"

export function TrabajadorConfig({isVisible, onClose}: {isVisible: boolean, onClose: () => void}) {
  if (!isVisible) return null
  return (
    <div className="grid flex-1  items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md z-50 max-w-full max-h-full overflow-auto">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 m-4">
        <div className="flex items-center gap-4">
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Trabajador0
          </h1>
          <Badge variant="outline" className="ml-auto sm:ml-0">
            Activo
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm" onClick={() => onClose()}>
              Descartar
            </Button>
            <Button size="sm">Guardar cambios</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Detalles</CardTitle>
                <CardDescription>
                  Gestione los datos del trabajador
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      defaultValue="Nombre del trabajador"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name">Cedula</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      defaultValue="Cedula del trabajador"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name">Contraseña</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      defaultValue="Contraseña del trabajador"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader>
                <CardTitle>Trabajos asignados</CardTitle>
                <CardDescription>
                  Revise los trabajos asignados a este trabajador
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Obra1</AccordionTrigger>
                    <AccordionContent>
                    <p className="font-bold text-base">Tareas</p>
                    <p>Tarea0</p>
                    <p>Tarea1</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Obra2</AccordionTrigger>
                    <AccordionContent>
                    <AccordionHeader>
                    <p className="font-bold text-base">Tareas</p>
                    <p>Tarea0</p>
                    <p>Tarea1</p>
                    <p>Tarea2</p>
                    <p>Tarea3</p>
                    </AccordionHeader>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Obra3</AccordionTrigger>
                    <AccordionContent>
                    <AccordionHeader>
                    <p className="font-bold text-base">Tareas</p>
                    <p>Tarea0</p>
                    <p>Tarea1</p>
                    <p>Tarea2</p>
                    </AccordionHeader>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              <CardFooter className="border-t p-4">
              </CardFooter>
            </Card>
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Estado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">Estado</Label>
                    <Select>
                      <SelectTrigger id="status" aria-label="Select status">
                        <SelectValue placeholder="Seleccione el estado"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Activo</SelectItem>
                        <SelectItem value="inactive">Inactivo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Rol</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">Rol</Label>
                    <Select>
                      <SelectTrigger id="status" aria-label="Select role">
                        <SelectValue placeholder="Seleccione el rol"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="capataz">Capataz</SelectItem>
                        <SelectItem value="pawn">Peon</SelectItem>
                        <SelectItem value="nose">Nose</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              className="overflow-hidden" x-chunk="dashboard-07-chunk-5"
            >
              <CardHeader>
                <CardTitle>Identificacion</CardTitle>
                <CardDescription>
                  Identificacion del trabajador
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <img
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Upload</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

