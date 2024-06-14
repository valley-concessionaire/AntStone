import { Badge } from "../components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import {
  MoreHorizontal,
} from "lucide-react"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { ObraConfig } from "./obraConfig"
import { Fragment, useEffect, useState } from "react"
import { TareaDeObra } from "../pages/obras/models/tarea-obra"
import { Work } from "../pages/obras/obrasColumns"

export function TableConf() {
  const [showObraConfig, setShowObraConfig] = useState(false)

  useEffect(() => {
    if (showObraConfig) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showObraConfig]);

  return (
  <Fragment>
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Obras</CardTitle>
                  <CardDescription>
                    Listado de obras registradas en el sistema de gestión.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nombre</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Maestro
                                </TableHead>
                                <TableHead>Costo</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actioneeees</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>

                            <TableRow>
                                <TableCell className="font-medium">
                                Laser Lemonade Machine
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Inactiva</Badge>
                                </TableCell>
                                <TableCell>$499.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                25
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={() => setShowObraConfig(true)}>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Eliminar</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                Hypernova Headphones
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$129.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                100
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                AeroGlow Desk Lamp
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$39.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                50
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                TechTonic Energy Drink
                                </TableCell>
                                <TableCell>
                                <Badge variant="secondary">Inactiva</Badge>
                                </TableCell>
                                <TableCell>$2.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                0
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                Gamer Gear Pro Controller
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$59.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                75
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                Luminous VR Headset
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$199.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                30
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Eliminar</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                Luminous VR Headset
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$199.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                30
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Eliminar</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                Luminous VR Headset
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$199.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                30
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Eliminar</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                Luminous VR Headset
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$199.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                30
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Eliminar</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                Luminous VR Headset
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$199.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                30
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Eliminar</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                Luminous VR Headset
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$199.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                30
                                </TableCell>
                                <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Eliminar</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="font-medium">
                                Luminous VR Headset
                                </TableCell>
                                <TableCell>
                                <Badge variant="outline">Activa</Badge>
                                </TableCell>
                                <TableCell>$199.99</TableCell>
                                <TableCell className="hidden md:table-cell">
                                30
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                        <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                        >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                        </Button>
                                        </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                            <DropdownMenuItem>Editar</DropdownMenuItem>
                                            <DropdownMenuItem>Eliminar</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
          <ObraConfig isVisible={showObraConfig} onClose={() => setShowObraConfig(false)} onSave={function (): void {
                      throw new Error("Function not implemented.")
                  } 
                }
                  tareas={{} as TareaDeObra} 
                  obra={{} as Work} 
                  />
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
  </Fragment>
  )
}

