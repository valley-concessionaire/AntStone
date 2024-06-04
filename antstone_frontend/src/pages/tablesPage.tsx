import { Input } from "../components/ui/input"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/tabs"

import ObrasPage from "./obras/obrasPage"
import TrabajadoresPage from "./trabajadores/trabajadoresPage"
import { useState } from "react"

export function TablesPage() {
    const [search , setSearch] = useState("")

    return (
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8  lg:grid-cols-2 ">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <Tabs defaultValue="Obras" onValueChange={(e) => setSearch("")}>
                    <div className="flex items-center">
                        <TabsList>
                            <TabsTrigger value="Obras">Obras</TabsTrigger>
                            <TabsTrigger value="Tareas">Tareas</TabsTrigger>
                            <TabsTrigger value="Trabajadores">Trabajadores</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="">
                        <div className="flex items-center py-4">
                            <Input
                            value={search}
                            placeholder="Filtrar por nombre..."
                            onChange={(event) =>
                            setSearch(event.target.value)
                            }
                            className="max-w-sm min-w-max"
                            />
                        </div>
                    </div>

                    <TabsContent value="Obras">
                        <ObrasPage search={search}/>
                    </TabsContent>
                    <TabsContent value="Tareas">
                    {/* <TareasDataTable /> */}
                        </TabsContent>
                    <TabsContent value="Trabajadores">
                        <TrabajadoresPage search={search}/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}