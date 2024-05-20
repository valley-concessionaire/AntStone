import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function ProfileSubPage() {
    return (
        <Dialog>
            <DialogTrigger asChild className="bg-blue-100 ">
                <Button variant="outline" className="rounded-full border-2 border-blue-400">J</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>Tu perfil</DialogTitle>
                <DialogDescription>
                    Puedes mirar tu perfil aqui.
                </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                    Nombre
                    </Label>
                    <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                    Usuario
                    </Label>
                    <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                    />
                </div>
                </div>
                <DialogFooter>
                <Button type="submit">Cerrar sesion</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}