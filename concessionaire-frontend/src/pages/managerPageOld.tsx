import { ProfileSubPage } from "../components/profileSubPage"
import { WorkView } from "./subPages/workView"

export function ManagerPageOld() {
    return (
        <div className="flex">
            <div className=" bg-blue-300 h-screen w-min flex flex-col items-center p-20 border-r-8 border-blue-100">
                <div>
                    Inicio
                </div>
                <div>
                    Obras
                </div>
                <div>
                    Trabajadores
                </div>
            </div>
            <div className="border-r-8 border-blue-100">
                <WorkView/>
            </div>
            <div className="ml-auto">
                <ProfileSubPage/>
            </div>
        </div>
    )
}