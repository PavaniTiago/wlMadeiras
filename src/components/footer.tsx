"use client"

import Image from "next/image";
import Link from "next/link";

export function Footer(){
    return (
        <footer className="flex flex-col items-center w-full gap-12 pb-8 pt-32 bg-green-800">
            <div className="flex w-full justify-evenly items-center">
                <div className="flex flex-col items-start justify-center">
                    <h2>logo</h2>
                    <p className="text-xs md:text-base text-primary-foreground max-w-24 md:max-w-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, error voluptatem cupiditate fugit distinctio facilis debitis quo.</p>
                    <div className="flex gap-3 items-center mt-2">
                        <Link href="#"><Image alt="social media icon" src="/instagram.svg" width={0} height={0} className={`w-8 h-8 md:w-10 md:h-10 text-secondary rounded-full p-2`}/></Link>
                        <Link href="#"><Image alt="discord icon" src="/twitter.svg" width={0} height={0} className={`w-8 h-8 md:w-10 md:h-10 text-secondary rounded-full p-2`}/></Link>
                        {/* <Link href=""><Image alt="social media icon" src="/facebook.svg" width={0} height={0} className="w-8 h-8 md:w-10 md:h-10 text-secondary bg-primary rounded-full p-2"/></Link>
                        <Link href=""><Image alt="social media icon" src="/twitter.svg" width={0} height={0} className="w-8 h-8 md:w-10 md:h-10 text-secondary bg-primary rounded-full p-2"/></Link> */}
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                    <h3 className="font-semibold text-sm md:text-xl text-white">Madeiras</h3>
                    <Link href="#" className="text-primary-foreground text-xs md:text-base hover:text-lol transition-all">exemplo</Link>
                    <Link href="#" className="text-primary-foreground text-xs md:text-base hover:text-lol transition-all">exemplo</Link>
                    <Link href="#" className="text-primary-foreground text-xs md:text-base hover:text-lol transition-all">exemplo</Link>
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                    <h3 className="font-semibold text-sm md:text-xl text-white">Pisos</h3>
                    <Link href="#" className="text-primary-foreground text-xs md:text-base hover:text-valorant transition-all">exemplo</Link>
                    <Link href="#" className="text-primary-foreground text-xs md:text-base hover:text-valorant transition-all">exemplo</Link>
                    <Link href="#" className="text-primary-foreground text-xs md:text-base hover:text-valorant transition-all">exemplo</Link>
                </div>
            </div>
            <span className="text-sm font-medium text-white">©2024 EloBlitz. All rights reserved</span>
        </footer>
    )
}