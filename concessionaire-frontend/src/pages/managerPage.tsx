import { ProfileSubPage } from "../components/profileSubPage"

export function ManagerPage() {
    return (
        <div className="flex">
            <div className=" bg-blue-300 h-screen w-min flex flex-col items-center p-20">
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
            <div className="ml-auto">
                <ProfileSubPage/>
            </div>
        </div>
    )
}