import { ImagesCarousel } from "@/components/carousel";
import { ProductsCarousel } from "@/components/products-carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowDownIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-100 overflow-x-hidden relative">
      <ImagesCarousel />
      <section className="h-screen absolute w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-6xl font-bold text-white">
          Designed for developers.
        </h1>
        <p className="text-xl font-medium text-gray-200">
          Next.js is a popular framework for building modern web applications.
        </p>
        <ArrowDownIcon className="absolute bottom-4 text-white w-8 h-8 animate-bounce"/>
      </section> 
      <ProductsCarousel />
      <article id="sobre-nos" className="w-full h-full pt-20 flex flex-col items-center justify-center px-32 pb-10">
        <section className="flex justify-between items-center w-full">
          <div className="flex flex-col items-start justify-center w-full max-w-2xl gap-6">
            <div className="flex items-center gap-3">
              <div className="w-20 bg-[#222C55] h-0.5 rounded-full"/>
              <span className="text-[#222C55] uppercase font-medium">Quem nós somos</span>
            </div>
              <h2 className="text-4xl font-bold text-neutral-950">
                Discover Sustainable Luxury Living with EcoHaven Realty.
              </h2>
              <p className="text-lg font-medium text-neutral-800 leading-8 mb-3">
                EcoHaven Realty is a real estate agency specialising in eco-friendly homes 
                and sustainable living. We offer a range of eco-friendly properties, 
                including energy-efficient homes, homes built with eco-friendly materials, 
                and homes equipped with sustainable technologies such as solar panels.
              </p>
              <Button className="rounded-full bg-[#FFF117] hover:bg-[#fff456] text-black shadow-xl transition-colors py-6 px-6">Nossa empresa <ArrowTopRightIcon className=" text-black" width={22} height={22}/></Button>
          </div>
          <Image alt="imagem da empresa" src="/img4.jpg" width={0} height={0} className="object-cover w-full rounded-3xl max-w-3xl" sizes="100vw"/>
        </section>

        {/* <Separator className="bg-[#222C55] w-full mt-8" /> */}

      </article>
        <section className="flex justify-between items-center w-full bg-white px-32 py-24">
          <div className="flex flex-col items-center justify-center w-full gap-6">
          <Image alt="imagem da empresa" src="/img10.jpg" width={0} height={0} className="object-cover w-full h-[40rem] rounded-3xl relative brightness-90" sizes="100vw"/>
            <div className="flex flex-col items-center gap-3 absolute bg-white max-w-4xl text-center p-12 rounded-3xl">
              <h2 className="text-4xl font-bold text-neutral-950">
                Discover Sustainable Luxury Living with EcoHaven Realty.
              </h2>
              <p className="text-lg font-medium max-w-lg text-neutral-800 mb-3">
                EcoHaven Realty is a real estate agency specialising in eco-friendly homes 
                and sustainable living.
              </p>
              <div className="flex justify-center items-center w-full gap-3">
                <input className="rounded-full w-[36rem] h-12 border-[#222C55] border-2 pl-4" type="text" placeholder="Digite aqui sua mensagem"/>
                <Button className="rounded-full bg-[#FFF117] hover:bg-[#fff456] shadow-xl text-black transition-colors h-12 w-32">Enviar</Button>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
