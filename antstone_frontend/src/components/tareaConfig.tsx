import {
    PlusCircle,
    Pencil,
    CircleX
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

import { useState } from "react"
import { DatePickerDemo } from "./ui/datePicker"


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
    
    const [isManagingAvance, setIsManagingAvance] = useState<boolean>(false)
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
                        <Button size="sm">Guardar cambios</Button>
                    </div>
                </div>
                <ScrollArea className=" max-h-[72vh] overflow-auto">
                    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-2 lg:gap-8 m-2">
                        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                            <div className=" inline-flex gap-10">
                                <Card x-chunk="dashboard-07-chunk-0" className="">
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
                                <Card x-chunk="dashboard-07-chunk-1" className="ml-auto h-fit">
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
                            <div className=" inline-flex gap-10">
                                <Card x-chunk="dashboard-07-chunk-2">
                                    <CardHeader>
                                        <CardTitle>Avances</CardTitle>
                                        <CardDescription>
                                            Gestione los avances de esta tarea
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        
                                        <Table>
                                            <ScrollArea className=" max-h-[200px]">
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="w-[100px]">Nombre</TableHead>
                                                        <TableHead>algo?</TableHead>
                                                        <TableHead>Fecha</TableHead>
                                                        <TableHead className="w-[50px]"></TableHead>
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
                                                            17/04/24
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button variant="outline" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Editar</span>
                                                                <Pencil className="h-4 w-4"/>
                                                            </Button>
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
                                                            21/04/24
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button variant="outline" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Editar</span>
                                                                <Pencil className="h-4 w-4"/>
                                                            </Button>
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
                                                            23/05/24
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button variant="outline" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Editar</span>
                                                                <Pencil className="h-4 w-4"/>
                                                            </Button>
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
                                                            27/05/24
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button variant="outline" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Editar</span>
                                                                <Pencil className="h-4 w-4"/>
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                    
                                                </TableBody>
                                            </ScrollArea>
                                        </Table>
                                        
                                    </CardContent>
                                    <CardFooter className="justify-center border-t p-4">
                                        <Button size="sm" variant="ghost" className="gap-1" onClick={() => setIsManagingAvance(true)}>
                                            <PlusCircle className="h-3.5 w-3.5"/>
                                            Añadir avance
                                        </Button>                                        
                                    </CardFooter>
                                </Card>
                                {isManagingAvance ?
                                <Card x-chunk="dashboard-07-chunk-3">
                                    <CardHeader className="flex">
                                        <div className="flex">
                                            <a className=" font-bold text-lg">Añadir Avance</a>
                                            <Button variant="ghost" className="rounded-full p-3 ml-auto" onClick={() => setIsManagingAvance(false)}>
                                                <CircleX className="h-4 w-4"/>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <Label htmlFor="description">Descripcion</Label>
                                                <Textarea
                                                    id="description"
                                                    placeholder="Describa el avance brevemente"
                                                    className="min-h-28"
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="name">Fecha</Label>
                                                <Input
                                                    id="date"
                                                    type="text"
                                                    className="w-full"
                                                    placeholder="Fecha del avance"
                                                />
                                                
                                            </div>
                                            {/*<DatePickerDemo/> must be checked*/}
                                            <div className="grid gap-3">
                                                <Button onClick={() => setIsManagingAvance(false)}>
                                                    Guardar
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                :
                                null
                                }
                            </div>
                            
                        </div>
                    </div>
                </ScrollArea>
            </div>
    )
}