import {
  File,
  ListFilter,
  PlusCircle,
} from "lucide-react"

import { TableConf } from "../../components/tableContent"
import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs"
import { Work, colObras } from "./obrasColumns"
import { ObrasDataTable } from "./obrasDataTable"
import { Fragment, useEffect, useState } from "react"

import { ObraConfig } from "../../components/obraConfig"


async function getData(): Promise<Work[]> {
  // Fetch data from your API here.
  return [
    {
      id: "Obra1",
      name: "Obra 1",
      cost: 316,
      status: "terminada",
      master: "Juan",
    },
    {
        id: "3u1reuv4",
        name: "Obra 2",
        cost: 242,
        status: "cancelada",
        master: "Pedro",
    },
    {
        id: "derv1ws0",
        name: "Obra 3",
        cost: 837,
        status: "procesando",
        master: "Cecilia",
    },
    {
        id: "5k212153ae",
        name: "Obra 4",
        cost: 874,
        status: "terminada",
        master: "Nemo",
    },
    {
      id: "5kmh2hae",
      name: "Obra 5",
      cost: 874,
      status: "terminada",
      master: "Nemo",
    },
    {
      id: "5kma32jkhe",
      name: "Obra 6",
      cost: 874,
      status: "cancelada",
      master: "Maria",
    },
    {
      id: "23809h3ae",
      name: "Obra 7",
      cost: 874,
      status: "cancelada",
      master: "Pedro",
    },
    {
      id: "32io9a53ae",
      name: "Obra 8",
      cost: 874,
      status: "procesando",
      master: "Pedra",
    },
    {
      id: "k2j3983ae",
      name: "Obra 9",
      cost: 874,
      status: "cancelada",
      master: "Piedra",
    },
    {
      id: "j239783ae",
      name: "Obra 10",
      cost: 874,
      status: "cancelada",
      master: "Sancocho",
    },
  ]
}

function ObrasPage()  {
  const [data, setData] = useState<Work[] | null>(null); // Initialize data to null to avoid potential errors
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

  if (showObraConfig) {
    console.log("Te saludo eh")
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData(); // Call your asynchronous function
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors appropriately (optional)
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on mount

  if (!data) {
    return <p>No data available.</p>; // Handle empty data scenario (optional)
  }

  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-7 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-7 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-7 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <ObrasDataTable columns={colObras(setShowObraConfig)} data={data} />
            </TabsContent>
          </Tabs>
          <ObraConfig isVisible={showObraConfig} onClose={() => setShowObraConfig(false)} />
        </div>
  )
}

export default ObrasPage