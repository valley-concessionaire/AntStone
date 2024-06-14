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
import { useState } from "react"

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

export function HomePage() {
  const [search , setSearch] = useState("")

  const handlePage = (p: String) => {
    setSearch("")
  }

  return (
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8  lg:grid-cols-2 ">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <Card x-chunk="dashboard-05-chunk-0">
                <CardHeader className="flex flex-row items-center">
                  <div className="grid gap-2">
                    <CardDescription>Este mes</CardDescription>
                    <CardTitle className="text-4xl">25 Obras</CardTitle>
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
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
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
                    <CardTitle className="text-4xl">25 tareas</CardTitle>
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
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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
                        <Pie data={data} dataKey="pv" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
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
                  <CardTitle className="text-4xl">Progreso de obras</CardTitle>
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
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
            </div>
            {/*
              <ObrasPage search=""/>
            */}
                        
          </div>
        </div>
  )
}

