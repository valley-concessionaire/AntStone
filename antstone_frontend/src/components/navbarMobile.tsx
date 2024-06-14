import {
  Home,
  LineChart,
  Package,
  PanelLeft,
  Package2,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

export function NavbarMobile() {
  return (
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <a
                  href="/"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  Inicio
                </a>
                <a
                  href="/obras"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  Obras
                </a>
                <a
                  href="/trabajadores"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  Trabajadores
                </a>
              </nav>
            </SheetContent>
          </Sheet>
  )
}
