import {
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
  ToggleGroup,
  ToggleGroupItem,
} from "../components/ui/toggle-group"

export function ObraConfig({isVisible, onClose}: {isVisible: boolean, onClose: () => void}) {
  if (!isVisible) return null
  return (
        <div className="grid flex-1 transition ease-in items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md z-50 max-w-full max-h-full overflow-auto">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 m-4">
            <div className="flex items-center gap-4">
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0 text-white">
                Laser Lemonade Machine
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0 text-white">
                Inactiva
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
                                <CardTitle>Detalles de Obra</CardTitle>
                                <CardDescription>
                                Añada un nombre y una descripcion a la obra
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
                                            defaultValue="Nombre de obra"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="description">Descripcion</Label>
                                        <Textarea
                                            id="description"
                                            defaultValue="Describa la obra"
                                            className="min-h-32"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-07-chunk-1">
                            <CardHeader>
                                <CardTitle>Trabajadores asignados</CardTitle>
                                <CardDescription>
                                    Gestione los trabajadores asignados a esta obra
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className="w-[100px]">Nombre</TableHead>
                                        <TableHead>Rol</TableHead>
                                        <TableHead>Blank</TableHead>
                                        <TableHead className="w-[100px]">Asignaciones</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-semibold">
                                                GGPC-001
                                            </TableCell>
                                            <TableCell>
                                                <Label htmlFor="stock-1" className="sr-only">
                                                Stock
                                                </Label>
                                                <Input
                                                id="stock-1"
                                                type="number"
                                                defaultValue="100"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Label htmlFor="price-1" className="sr-only">
                                                Price
                                                </Label>
                                                <Input
                                                id="price-1"
                                                type="number"
                                                defaultValue="99.99"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <ToggleGroup
                                                type="single"
                                                defaultValue="s"
                                                variant="outline"
                                                >
                                                <ToggleGroupItem value="s">S</ToggleGroupItem>
                                                <ToggleGroupItem value="m">M</ToggleGroupItem>
                                                <ToggleGroupItem value="l">L</ToggleGroupItem>
                                                </ToggleGroup>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-semibold">
                                                GGPC-002
                                            </TableCell>
                                            <TableCell>
                                                <Label htmlFor="stock-2" className="sr-only">
                                                Stock
                                                </Label>
                                                <Input
                                                id="stock-2"
                                                type="number"
                                                defaultValue="143"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Label htmlFor="price-2" className="sr-only">
                                                Price
                                                </Label>
                                                <Input
                                                id="price-2"
                                                type="number"
                                                defaultValue="99.99"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <ToggleGroup
                                                type="single"
                                                defaultValue="m"
                                                variant="outline"
                                                >
                                                <ToggleGroupItem value="s">S</ToggleGroupItem>
                                                <ToggleGroupItem value="m">M</ToggleGroupItem>
                                                <ToggleGroupItem value="l">L</ToggleGroupItem>
                                                </ToggleGroup>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter className="justify-center border-t p-4">
                                <Button size="sm" variant="ghost" className="gap-1">
                                <PlusCircle className="h-3.5 w-3.5" />
                                    Añadir trabajador
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card x-chunk="dashboard-07-chunk-2">
                            <CardHeader>
                                <CardTitle>Tareas</CardTitle>
                                <CardDescription>
                                    Gestione las tareas asignadas en esta obra
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">Nombre</TableHead>
                                            <TableHead>Estado</TableHead>
                                            <TableHead>Asignado a</TableHead>
                                            <TableHead className="w-[100px]">Asignaciones</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-semibold">
                                                GGPC-001
                                            </TableCell>
                                            <TableCell>
                                                <Label htmlFor="stock-1" className="sr-only">
                                                Stock
                                                </Label>
                                                <Input
                                                id="stock-1"
                                                type="number"
                                                defaultValue="100"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Label htmlFor="price-1" className="sr-only">
                                                Price
                                                </Label>
                                                <Input
                                                id="price-1"
                                                type="number"
                                                defaultValue="99.99"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <ToggleGroup
                                                type="single"
                                                defaultValue="s"
                                                variant="outline"
                                                >
                                                <ToggleGroupItem value="s">S</ToggleGroupItem>
                                                <ToggleGroupItem value="m">M</ToggleGroupItem>
                                                <ToggleGroupItem value="l">L</ToggleGroupItem>
                                                </ToggleGroup>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-semibold">
                                                GGPC-002
                                            </TableCell>
                                            <TableCell>
                                                <Label htmlFor="stock-2" className="sr-only">
                                                Stock
                                                </Label>
                                                <Input
                                                id="stock-2"
                                                type="number"
                                                defaultValue="143"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Label htmlFor="price-2" className="sr-only">
                                                Price
                                                </Label>
                                                <Input
                                                id="price-2"
                                                type="number"
                                                defaultValue="99.99"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <ToggleGroup
                                                type="single"
                                                defaultValue="m"
                                                variant="outline"
                                                >
                                                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                                                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                                                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                                                </ToggleGroup>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter className="justify-center border-t p-4">
                                <Button size="sm" variant="ghost" className="gap-1">
                                    <PlusCircle className="h-3.5 w-3.5" />
                                        Añadir tarea
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-4">
                        <CardHeader>
                            <CardTitle>Estado de la Obra</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="status">Estado</Label>
                                <Select>
                                <SelectTrigger id="status" aria-label="Select status">
                                    <SelectValue placeholder="Seleccione el estado" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="active">Activa</SelectItem>
                                    <SelectItem value="inactive">Inactiva</SelectItem>
                                    <SelectItem value="archived">Archivada</SelectItem>
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
                                <CardTitle>Imagenes de Obra</CardTitle>
                                <CardDescription>
                                    Imagenes proporcionadas en la obra
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
                                        <button>
                                            <img
                                                alt="Product image"
                                                className="aspect-square w-full rounded-md object-cover"
                                                height="84"
                                                src="/placeholder.svg"
                                                width="84"
                                            />
                                        </button>
                                        <button>
                                            <img
                                                alt="Product image"
                                                className="aspect-square w-full rounded-md object-cover"
                                                height="84"
                                                src="/placeholder.svg"
                                                width="84"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-07-chunk-6">
                            <CardHeader>
                                <CardTitle>Archivar Obra</CardTitle>
                                <CardDescription>
                                    Archive la obra
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button size="sm" variant="secondary">
                                    Archivar Obra
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" size="sm">
                        Discard
                    </Button>
                    <Button size="sm">Save Product</Button>
                </div>
            </div>
        </div>
    )
}
