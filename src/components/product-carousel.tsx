"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

import Autoplay from "embla-carousel-autoplay"

const images: String[] = [
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
]

export function ProductCarousel() {
  return (
    <Carousel className="w-full max-w-xl"
        opts={{
            loop: true,
        }}
        plugins={[
            Autoplay({
                delay: 3000,
            }),
        ]}
    >
      <CarouselContent>
        {images.map((value, index) => (
          <CarouselItem key={index} className="flex items-center justify-center ">
            <Image alt="background image" src={value as any} width={0} height={0} className="h-[20rem] w-full object-cover brightness-[85%] rounded-xl" sizes="100vw"/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
