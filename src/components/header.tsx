import Link from "next/link"
import { Button } from "./ui/button"

export const Header = () => {
    return (
        <header className="flex w-full bg-neutral-950/30 border-b-[1px] border-neutral-200/40 justify-between px-32 h-24 items-center absolute top-0 z-10">
            <h1 className="text-2xl text-neutral-50">logo</h1>
            <ul className="flex items-center justify-center gap-8 text-sm uppercase font-semibold text-neutral-50 [&>li:hover]:text-neutral-200 transition-all">
                <li><Link href="#">Quem somos</Link></li>
                <li><Link href="#">Madeiras</Link></li>
                <li><Link href="#">Pisos</Link></li>
                <li><Link href="#">Contato</Link></li>
            </ul>
            <Button className="rounded-full bg-green-800 hover:bg-green-700 transition-colors py-5 px-5">Entrar em contato</Button>
        </header>
    )
}