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
                    <TabsContent value="Obras">
                        <ObrasPage  search=""/>
                    </TabsContent>
                    <TabsContent value="Tareas">
                    {/* <TareasDataTable /> */}
                        </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
