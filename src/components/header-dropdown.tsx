import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import Link from "next/link"
  
  export function HeaderDropDown() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" className="text-[#222C55] hover:text-neutral-900 text-sm uppercase gap-2">Produtos <ChevronDownIcon className="w-4 h-4"/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#222C55] text-white border-neutral-800">
          <DropdownMenuLabel>Nossos Produtos</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-neutral-800"/>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/produtos/decks">Decks</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/produtos/madeiramento-bruto">Madeiramento Bruto</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/produtos/portas-janelas">Portas e Janelas</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/produtos/telhas">Telhas</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  