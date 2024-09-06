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

const images: string[] = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
  "/img13.jpg",
  "/img14.jpg",
  "/img15.jpg",
  "/img16.jpg",
  "/img17.jpg",
]

export function ImagesCarousel() {
  return (
    <Carousel className="w-full"
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
          <CarouselItem key={index}>
            <Image alt="background image" src={value as any} width={0} height={0} className="w-full h-screen object-cover brightness-[65%]" sizes="100vw"/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
