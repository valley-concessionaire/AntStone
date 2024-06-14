import {
    PlusCircle,
    Pencil,
    CircleMinus,
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
import { ScrollArea } from "@radix-ui/react-scroll-area"
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

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"

import TrabajadoresPage from "../pages/trabajadores/trabajadoresPage"
import { TareaConfig } from "./tareaConfig"
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipProvider } from "./ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

interface Props {
    isVisible: boolean, 
    onClose: () => void,
    onSave: () => void
}

export function ObraConfig(
    {
        isVisible, 
        onClose, 
        onSave
    }: Props) {
    
    function addTaskRow(tasks: any) {
        return (
        <TableRow>
            <TableCell className="font-semibold">
                {tasks[0] /*Nombre*/}
            </TableCell>
            <TableCell>
                {tasks[1] /*Estado*/}
            </TableCell>
            <TableCell>
                {tasks[2] /*Asignado a*/}
            </TableCell>
            <TableCell>
                {tasks[3] /*Avances*/}
            </TableCell>
            <TableCell>
                <Button variant="outline" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <Pencil className="h-4 w-4"/>
                </Button>
            </TableCell>
        </TableRow>
        )
    }
    
    const tas0 = ["Tarea 0", "En progreso", "Ermenejildo", 5]
    const tas2 = ["Tarea 2", "Terminada?", "Juana", 9]

    const tass = [tas0, tas2]

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
                        <Button  onClick={onSave} size="sm">Guardar cambios</Button>
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
                                    <ScrollArea className=" max-h-[200px]">
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Nombre</TableHead>
                                                <TableHead>Rol</TableHead>
                                                <TableHead>estado?</TableHead>
                                                <TableHead>Asignaciones</TableHead>
                                                <TableHead className="w-[50px]"></TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>

                                            <TableRow>
                                                <TableCell className="font-semibold">
                                                    Trabajador3
                                                </TableCell>
                                                <TableCell>
                                                    Maestro
                                                </TableCell>
                                                <TableCell>
                                                    Activo?
                                                </TableCell>
                                                <TableCell>
                                                    8
                                                </TableCell>
                                                <TableCell>
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger asChild>
                                                                        <Button variant="ghost" className="md:h-8 md:w-8 p-0 rounded-full text-muted-foreground">
                                                                            <CircleMinus className="h-4 w-4"/>
                                                                        </Button>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent side="right">Desvincular</TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        </DialogTrigger>
                                                        <DialogContent>
                                                            <DialogHeader>
                                                                <DialogTitle>
                                                                    Desvincular trabajador
                                                                </DialogTitle>
                                                                <DialogDescription>
                                                                    ¿Está seguro de desvincular al trabajador [nombre] de la obra [nombre?]?
                                                                    Sus tareas seguirán en la obra [nose] / Sus tareas se eliminarán.
                                                                </DialogDescription>
                                                            </DialogHeader>
                                                            <DialogFooter>
                                                                <Button variant="outline">Confirmar</Button>
                                                            </DialogFooter>
                                                        </DialogContent>
                                                    </Dialog>
                                                </TableCell>
                                            </TableRow>
                                            
                                        </TableBody>
                                    </ScrollArea>
                                </Table>
                                
                            </CardContent>
                            <CardFooter className="justify-center border-t p-4">

                                <Sheet>
                                    <SheetTrigger>
                                        <Button size="sm" variant="ghost" className="gap-1">
                                            <PlusCircle className="h-3.5 w-3.5"/>
                                            Añadir trabajador
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent className="w-full min-w-fit rounded-l-3xl">
                                        <SheetHeader>
                                            <SheetTitle>Añada trabajadores</SheetTitle>
                                            <SheetDescription>
                                                Añada trabajadores disponibles a la obra.
                                            </SheetDescription>
                                            <ScrollArea className=" max-h-[80vh] overflow-auto">
                                                <TrabajadoresPage search={""} isForEditing={false}/>
                                            </ScrollArea>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                                
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
                                    <ScrollArea className="h-[200px]">
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Nombre</TableHead>
                                                <TableHead>Estado</TableHead>
                                                <TableHead>Asignado a</TableHead>
                                                <TableHead>Avances</TableHead>
                                                <TableHead className="w-[10px]"></TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        {false ?
                                        <TableBody>

                                            <TableRow>
                                                <TableCell className="font-semibold">
                                                    Tarea 0
                                                </TableCell>
                                                <TableCell>
                                                    En progreso
                                                </TableCell>
                                                <TableCell>
                                                    Ermenejildo
                                                </TableCell>
                                                <TableCell>
                                                    5
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="outline" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <Pencil className="h-4 w-4"/>
                                                    </Button>
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell className="font-semibold">
                                                    Tarea 2
                                                </TableCell>
                                                <TableCell>
                                                    Terminada?
                                                </TableCell>
                                                <TableCell>
                                                    Juana
                                                </TableCell>
                                                <TableCell>
                                                    9
                                                </TableCell>
                                            </TableRow>

                                        </TableBody>
                                        :
                                        <TableBody>
                                            {tass.map((unaTarea) => {
                                                return (
                                                    addTaskRow(unaTarea)
                                                )
                                            }
                                            )}
                                        </TableBody>
                                        }
                                    </ScrollArea>
                                </Table>
                                
                            </CardContent>
                            <CardFooter className="justify-center border-t p-4">

                                <Sheet>
                                    <SheetTrigger>
                                        <Button size="sm" variant="ghost" className="gap-1">
                                            <PlusCircle className="h-3.5 w-3.5" />
                                                Añadir tarea
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent className="w-full min-w-fit rounded-l-3xl">
                                        <SheetHeader>
                                            <SheetTitle>Añada una tarea</SheetTitle>
                                            <SheetDescription>
                                                Configure la tarea a añadir a la obra.
                                            </SheetDescription>
                                            <TareaConfig/>

                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>

                            </CardFooter>
                        </Card>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-3">
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
                        className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
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
                    </div>
                </div>
            </div>
        </div>
    )
}
