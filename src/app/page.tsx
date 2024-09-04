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
      <section className="h-screen absolute w-full flex flex-col items-center justify-center gap-6 px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl max-w-2xl font-bold text-white text-center">
          Produtos de Madeira de Alta Qualidade.
        </h1>
        <p className="text-lg md:text-xl max-w-xl font-medium text-gray-200 text-center">
          Oferecemos uma ampla gama de produtos de madeira, incluindo portas, janelas e telhas.
        </p>
        <ArrowDownIcon className="absolute bottom-4 text-white w-8 h-8 animate-bounce"/>
      </section> 
      <ProductsCarousel />
      <article id="sobre-nos" className="w-full h-full pt-20 flex flex-col items-center justify-center px-4 md:px-32 pb-10">
        <section className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          <div className="flex flex-col items-start justify-center w-full max-w-2xl gap-6">
            <div className="flex items-center gap-3">
              <div className="w-20 bg-[#222C55] h-0.5 rounded-full"/>
              <span className="text-[#222C55] uppercase font-medium">Quem nós somos</span>
            </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">
                Descubra o Luxo Sustentável com a WL Madeiras.
              </h2>
              <p className="text-base md:text-lg font-medium text-neutral-800 leading-8 mb-3">
                A WL Madeiras é especializada em produtos de madeira eco-friendly. 
                Oferecemos uma variedade de produtos sustentáveis, incluindo portas, janelas, 
                telhas e muito mais, todos feitos com materiais ecológicos.
              </p>
              <Button className="rounded-full bg-[#FFF117] hover:bg-[#fff456] text-black shadow-xl transition-colors py-4 md:py-6 px-4 md:px-6">Nossa empresa <ArrowTopRightIcon className=" text-black" width={22} height={22}/></Button>
          </div>
          <Image 
            alt="imagem da empresa" 
            src="/img4.jpg" 
            width={0} 
            height={0} 
            className="object-cover w-full rounded-3xl max-w-full md:max-w-3xl" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />        </section>

        {/* <Separator className="bg-[#222C55] w-full mt-8" /> */}

      </article>
        <section className="flex flex-col md:flex-row justify-between items-center w-full bg-white px-4 md:px-32 py-24">
          <div className="flex flex-col items-center justify-center w-full gap-6">
          <Image alt="imagem da empresa" src="/img10.jpg" width={0} height={0} className="object-cover w-full h-[20rem] md:h-[40rem] rounded-3xl relative brightness-90" sizes="100vw"/>
            <div className="flex flex-col items-center gap-3 absolute bg-white max-w-4xl text-center p-6 md:p-12 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">
                Descubra o Luxo Sustentável com a WL Madeiras.
              </h2>
              <p className="text-base md:text-lg font-medium max-w-lg text-neutral-800 mb-3">
                A WL Madeiras é especializada em produtos de madeira eco-friendly.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center w-full gap-3">
                <input className="rounded-full w-full md:w-[36rem] h-12 border-[#222C55] border-2 pl-4" type="text" placeholder="Digite aqui sua mensagem"/>
                <Button className="rounded-full bg-[#FFF117] hover:bg-[#fff456] shadow-xl text-black transition-colors h-12 w-full md:w-32">Enviar</Button>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}