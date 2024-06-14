import { TooltipProvider } from "@radix-ui/react-tooltip"
import {
  Home,
  Package2,
  Settings,
  Hammer,
  HardHat,
} from "lucide-react"
import { ModeToggle } from "../components/mode-toggle";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip"

export function Navbar() {
  return (
        <nav className="hidden flex-col gap-6 font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground text-lg"
          >
            Inicio
          </a>
          <a
            href="/obras"
            className="text-muted-foreground transition-colors hover:text-foreground text-lg"
          >
            Obras 
          </a>
          <a
            href="/trabajadores"
            className="text-muted-foreground transition-colors hover:text-foreground text-lg"
          >
            Trabajadores 
          </a>
        </nav>
  )
}
