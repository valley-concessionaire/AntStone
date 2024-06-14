import { Navbar } from "../components/navbar"
import {
  Search,
} from "lucide-react"

import { Navigate, Route, Routes } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../components/ui/dropdown-menu"
import { Input } from "../components/ui/input"
import { NavbarMobile } from "../components/navbarMobile"
import { HomePage } from "../pages/homePage";
import IoCContainer from "../shared/IoC/IoCContainer";
import ObrasPage from "../pages/obras/obrasPage";
import TrabajadoresPage from "../pages/trabajadores/trabajadoresPage";
import { ModeToggle } from "../components/mode-toggle";


export function AuthenticatedLayout() {


  const user = IoCContainer.getAuthManager().getUser();

  const logout = (e: any) => {
    e.preventDefault();
    IoCContainer.getAuthManager().removeAuthentication();
    window.location.href = '/';
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
        <header className="z-50 sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Navbar />
          <NavbarMobile />
          <div className="ml-auto flex gap-4">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <img
                    src="https://th.bing.com/th/id/OIP.m-zanqIMqCBweOdA1MgeEAHaHa?rs=1&pid=ImgDetMain"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 p-2 font-bold">{user.full_name ?? ''}</div>
                <DropdownMenuItem>
                  <div onClick={logout}>
                    Cerrar sesión
                  </div>
                </DropdownMenuItem>

              </DropdownMenuContent>

            </DropdownMenu>
          </div>
        </header>
        <main className="gap-4 p-4 md:gap-8 md:p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />
            <Route path="/obras" element={<ObrasPage search={""}/>} />
            <Route path="/trabajadores" element={<TrabajadoresPage search={""} isForEditing={true}/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
    </div>
  )
}

