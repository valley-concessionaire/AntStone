import { ProfileSubPage } from "../components/profileSubPage"
import { WorkView } from "./subPages/workView"
import { Button } from "../components/ui/button"
import ImagenabajoIzquierda from "../images/manager.png"

export function ManagerPage() {
    return (
        <div className="flex">
            <div className=" bg-blue-300 h-screen w-min flex flex-col items-center p-20 border-r-8 border-blue-100">
                <div className="my-8">
                    <Button variant="outline">INICIO</Button>
                </div>
                <div className="my-8">
                    <Button variant="outline">OBRAS</Button>
                </div>
                <div className="mt-8 mb-32">
                    <Button variant="outline">TRABAJADORES</Button>
                </div>
                
                <div className="mt-auto">
                    <h1>ADMINISTRADOR</h1>
                    <img
                        src={ImagenabajoIzquierda}
                        alt="Imagen"
                        //width="1920"
                        //height="1080"
                        className="w-full object-cover dark:brightness-[0.8] grayscale"
                    />
                    <p className="text-xs pt-10">AntStone Copyright ©</p>
                </div>
                
            </div>

            <div className="w-full px-20 py-5">
                <div className="flex justify-end">
                    <ProfileSubPage/>
                </div>
                <div>
                    <WorkView/>
                </div>
            </div>

            
        </div>
    )
}