import { ProductCarousel } from "@/components/product-carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-100 overflow-x-hidden relative">
      <div className="flex w-full items-center justify-center relative">
        <Image alt="background image" src="/img7.jpg" width={0} height={0} className="object-cover w-full h-[25rem] brightness-75" sizes="100vw"/>
        <section className="h-screen absolute w-full flex items-center justify-center gap-6 px-4 md:px-0">
          <div className="flex flex-col text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-2">Madeiramento Bruto</h2>
            <p className="text-sm md:text-md text-neutral-200 mb-6 max-w-md">Visualize nossos Madeiramento Bruto com material de primeira. Para mais dúvidas clique no botão Entrar em Contato</p>
          </div>
        </section> 
      </div>
      <section className="flex flex-col md:flex-row my-auto justify-between items-center gap-10 px-4 md:px-0">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Madeiramento Bruto</h2>
          <p className="text-sm md:text-md text-neutral-700 mb-6 max-w-md">Visualize nossos Madeiramento Bruto com material de primeira. Para mais dúvidas clique no botão Entrar em Contato</p>
          <Button type="submit" className="w-full md:w-40 px-12 py-2 border border-transparent shadow-sm text-sm font-medium text-white rounded-md bg-[#222C55] hover:bg-[#303e74] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Enviar
          </Button>
        </div>
        <ProductCarousel />
      </section>
    </main>
  );
}