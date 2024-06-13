import {
    PlusCircle,
    Pencil,
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
import { ScrollBar } from "./ui/scroll-area"


interface Props {
    /*
    isVisible: boolean,
    onClose: () => void,
    onSave: () => void*/
}

export function TareaConfig(
    {
        //isVisible
        //onClose, 
        //onSave
    }: Props) {

    return (
            <div className="mx-auto grid max-w-[44rem] flex-1 gap-4 m-4">
                <div className="flex items-center gap-4">
                    <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                        ...
                    </h1>
                    <Badge variant="outline" className="ml-auto sm:ml-0">
                        Inactiva
                    </Badge>
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                        <Button variant="outline" size="sm">
                        Descartar
                        </Button>
                        <Button size="sm">Guardar cambios</Button>
                    </div>
                </div>
                <ScrollArea className=" max-h-[72vh] overflow-auto">
                    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                            <Card x-chunk="dashboard-07-chunk-0">
                                <CardHeader>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Nombre</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                className="w-full"
                                                placeholder="Nombre de tarea"
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="description">Descripcion</Label>
                                            <Textarea
                                                id="description"
                                                placeholder="Describa la tarea"
                                                className="min-h-28"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card x-chunk="dashboard-07-chunk-1">
                                <CardHeader>
                                    <CardTitle>Avances</CardTitle>
                                    <CardDescription>
                                        Gestione los avances de esta tarea
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    
                                    <Table>
                                        
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[100px]">Nombre</TableHead>
                                                    <TableHead>algo?</TableHead>
                                                    <TableHead className="w-[100px]">Fecha</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-semibold">
                                                            Avance 0
                                                        </TableCell>
                                                        <TableCell>
                                                            Maestro
                                                        </TableCell>
                                                        <TableCell>
                                                            28-05-24
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell className="font-semibold">
                                                            Avance 1
                                                        </TableCell>
                                                        <TableCell>
                                                            Maestro
                                                        </TableCell>
                                                        <TableCell>
                                                            21-04-24
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell className="font-semibold">
                                                            Avance 2
                                                        </TableCell>
                                                        <TableCell>
                                                            Maestro
                                                        </TableCell>
                                                        <TableCell>
                                                            23-05-24
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell className="font-semibold">
                                                            Avance 3
                                                        </TableCell>
                                                        <TableCell>
                                                            Maestro
                                                        </TableCell>
                                                        <TableCell>
                                                            23-05-24
                                                        </TableCell>
                                                    </TableRow>
                                                
                                            </TableBody>
                                    </Table>
                                    
                                </CardContent>
                                <CardFooter className="justify-center border-t p-4">

                                    <Sheet>
                                        <SheetTrigger>
                                            <Button size="sm" variant="ghost" className="gap-1">
                                                <PlusCircle className="h-3.5 w-3.5"/>
                                                Añadir avance
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent className="w-full min-w-fit rounded-l-3xl">
                                            <SheetHeader>
                                                <SheetTitle>Añadir avance</SheetTitle>
                                                <SheetDescription>
                                                    Añada un nuevo avance a la tarea.
                                                </SheetDescription>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>
                                    
                                </CardFooter>
                            </Card>
                            
                        </div>
                        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                            <Card x-chunk="dashboard-07-chunk-3">
                            <CardHeader>
                                <CardTitle>Estado de la Tarea</CardTitle>
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
                        </div>
                    </div>
                </ScrollArea>
            </div>
    )
}