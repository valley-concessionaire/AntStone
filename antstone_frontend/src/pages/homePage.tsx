import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  MoreVertical,
  ArrowUpRight,
  Truck,
} from "lucide-react"
import { TableConf } from "../components/tableContent"
import { TrabajadoresDataTable } from "../pages/trabajadores/trabajadoresDataTable"

import { Bar, BarChart, ResponsiveContainer, AreaChart,Tooltip, Legend, Pie, PieChart, LineChart, Line, Area} from "recharts"

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
import { ObrasDataTable } from "./obras/obrasDataTable"
import { useEffect, useState } from "react"
import requests from "../shared/api/agent"
import { GetTotalObras, GetTotalTareas } from "../shared/api/api-urls"

const data = [
  {
    "name": "Page A",
    "obras": 4000,
    "tareas": 2400
  },
  {
    "name": "Page B",
    "obras": 3000,
    "tareas": 1398
  },
  {
    "name": "Page C",
    "obras": 2000,
    "tareas": 9800
  },
  {
    "name": "Page D",
    "obras": 2780,
    "tareas": 3908
  },
  {
    "name": "Page E",
    "obras": 1890,
    "tareas": 4800
  },
]

export function HomePage() {
  const [search , setSearch] = useState("")

  const handlePage = (p: String) => {
    setSearch("")
  }

  const [totalTasks, setTotalTasks] = useState(0);
  const [totalObras, setTotalObras] = useState(0)

  useEffect(() => {
    try {
      requests.get(GetTotalObras())
      .then((data) => 
      {
        setTotalTasks(data.total_obras)
      }
    )

    requests.get(GetTotalTareas())
      .then((data) => 
      {
        setTotalObras(data.total_tareas)
      }
    )
    }
      catch (e) {console.log(e)}
  }, [])

  return (
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8  lg:grid-cols-2 ">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <Card x-chunk="dashboard-05-chunk-0">
                <CardHeader className="flex flex-row items-center">
                  <div className="grid gap-2">
                    <CardDescription>Este mes</CardDescription>
                    <CardTitle className="text-4xl">{totalTasks} Obras</CardTitle>
                  </div>
                  <Button asChild size="sm" className="ml-auto gap-1">
                    <a href="/obras">
                      Ver obras
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="text-xs mt-3 h-[250px] text-muted-foreground">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="tareas" fill="#8884d8" />
                        <Bar dataKey="obras" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-0">
                <CardHeader className="flex flex-row items-center">
                  <div className="grid gap-2">
                    <CardDescription>Este mes</CardDescription>
                    <CardTitle className="text-4xl">{totalObras} tareas</CardTitle>
                  </div>
                  <Button asChild size="sm" className="ml-auto gap-1">
                    <a href="/obras">
                      Ver tareas
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="text-xs mt-3 h-[250px] text-muted-foreground">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="tareas" stroke="#8884d8" />
                        <Line type="monotone" dataKey="obras" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-2">
                  <CardDescription>Este mes</CardDescription>
                  <CardTitle className="text-4xl">Progreso de obras</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs mt-3 h-[250px] text-muted-foreground">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Tooltip />
                        <Pie data={data} dataKey="tareas" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                        <Pie data={data} dataKey="obras" nameKey="name" cx="50%" cy="50%" innerRadius={90} outerRadius={120} fill="#82ca9d"/>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-2">
                  <CardDescription>Este mes</CardDescription>
                  <CardTitle className="text-4xl">Progreso de Tareas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs mt-3 h-[250px] text-muted-foreground">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area type="monotone" dataKey="obras" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="tareas" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
  )
}

