"use client"

import Image from "next/image";
import Link from "next/link";

export function Footer(){
    return (
        <footer className="flex flex-col items-center w-full gap-12 pb-8 pt-32 bg-[#FFF117]">
            <div className="flex w-full justify-evenly items-center flex-wrap">
                <div className="flex flex-col items-start justify-center">
                <Image alt="logo icon" src='/logo.png' width={0} height={0} sizes="100vw" className="object-cover w-[10rem] h-[5rem] md:w-[18rem]"/>
                    <p className="text-xs md:text-base text-neutral-900  max-w-24 md:max-w-sm">
                        WL Madeiras é especializada em produtos de madeira eco-friendly. Oferecemos uma variedade de produtos sustentáveis, incluindo portas, janelas, telhas e muito mais, todos feitos com materiais ecológicos.
                    </p>
                    <div className="flex gap-3 items-center mt-2">
                        <Link href="#"><Image alt="social media icon" src="/instagram.svg" width={0} height={0} className="w-8 h-8 md:w-10 md:h-10 text-secondary rounded-full p-2"/></Link>
                        <Link href="#"><Image alt="discord icon" src="/twitter.svg" width={0} height={0} className="w-8 h-8 md:w-10 md:h-10 text-secondary rounded-full p-2"/></Link>
                    </div>
                </div>
                <div className="flex flex-col items-start text-neutral-900 justify-center gap-3">
                    <h3 className="font-semibold text-sm md:text-xl text-neutral-900">Links</h3>
                    <Link href="/#sobre-nos" className=" text-neutral-900 text-xs md:text-base hover:text-lol transition-all">Quem somos</Link>
                    <Link href="#" className=" text-xs text-neutral-900 md:text-base hover:text-lol transition-all">Obras</Link>
                    <Link href="/contato" className=" text-neutral-900 text-xs md:text-base hover:text-lol transition-all">Contato</Link>
                </div>
            </div>
            <span className="text-sm font-medium text-neutral-900">©2024 WL Madeiras. All rights reserved</span>
        </footer>
    )
}