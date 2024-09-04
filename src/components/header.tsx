import Link from "next/link";
import { Button } from "./ui/button";
import { HeaderDropDown } from "./header-dropdown";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { HeaderDropDownResponsive } from "./header-dropdown-responsive";

export const Header = () => {
    return (
        <header className="flex w-full bg-neutral-950/30 border-b-[1px] border-neutral-200/40 justify-between px-4 md:px-32 h-24 items-center absolute top-0 z-10">
            <Image alt="logo icon" src='/logo.png' width={0} height={0} sizes="100vw" className="object-cover w-[10rem] md:w-[18rem]"/>
            <ul className="hidden md:flex absolute -inset-x-0 items-center justify-center gap-8 text-sm uppercase font-semibold text-neutral-50 [&>li:hover]:text-neutral-200 transition-all">
                <li><Link href="/#sobre-nos">Quem somos</Link></li>
                <li><HeaderDropDown /></li>
                <li><Link href="#">Obras</Link></li>
                <li><Link href="/contato">Contato</Link></li>
            </ul>
            <Button className="hidden md:flex items-center text-center rounded-full bg-[#222C55] hover:bg-[#303e74] transition-colors py-5 px-5">Entrar em contato</Button>
            <Sheet>
                <SheetTrigger asChild>
                    <button className="md:hidden text-neutral-50">
                        <HamburgerMenuIcon className="w-8 h-8" />
                    </button>
                </SheetTrigger>
                <SheetContent className="bg-neutral-50 p-6 rounded-lg">
                    <SheetHeader className="flex justify-between items-center">
                        <SheetTitle className="text-lg font-bold text-neutral-50">Menu</SheetTitle>
                    </SheetHeader>
                    <ul className="flex flex-col items-center gap-6 text-sm uppercase font-semibold text-neutral-800 [&>li:hover]:text-neutral-900 transition-all">
                        <li><Link href="/#sobre-nos">Quem somos</Link></li>
                        <li><HeaderDropDownResponsive /></li>
                        <li><Link href="#">Obras</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                    </ul>
                    <Button className="mt-6 w-full rounded-full bg-[#222C55] hover:bg-[#303e74] transition-colors py-5 px-5">Entrar em contato</Button>
                </SheetContent>
            </Sheet>
        </header>
    );
}