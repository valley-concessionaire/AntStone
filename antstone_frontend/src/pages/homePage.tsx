import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  MoreVertical,
  Truck,
} from "lucide-react"
import { TableConf } from "../components/tableContent"
import { TrabajadoresDataTable } from "../pages/trabajadores/trabajadoresDataTable"

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
import { Input } from "../components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../components/ui/pagination"
import { Progress } from "../components/ui/progress"
import { Separator } from "../components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"

import ObrasPage from "./obras/obrasPage"
import TrabajadoresPage from "./trabajadores/trabajadoresPage"
import { TablesPage } from "./tablesPage"
import { useState } from "react"

export function HomePage() {
  const [search , setSearch] = useState("")

  const handlePage = (p: String) => {
    setSearch("")
  }

  return (
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8  lg:grid-cols-2 ">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Información General</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Aqui se muestra la información general de la empresa con respecto a tareas y clientes.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Registrar nueva obra</Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>Esta semana</CardDescription>
                  <CardTitle className="text-4xl">5 tareas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25% más que la semana pasada
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={25} aria-label="25% increase" />
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>Este mes</CardDescription>
                  <CardTitle className="text-4xl">25 tareas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% más que el mes pasado
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label="12% increase" />
                </CardFooter>
              </Card>
            </div>
            {/**
              <TablesPage />
            */}
          </div>
        </div>
  )
}

