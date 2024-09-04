import { ImagesCarousel } from "@/components/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-100 overflow-x-hidden relative">
      <ImagesCarousel />
      <section className="h-screen absolute w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-0">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-2">Contact Us</h2>
          <p className="text-sm md:text-md text-neutral-200 mb-6">Fill out the form below to get in touch with us.</p>
        </div>
        <form className="space-y-4 w-full max-w-[22rem]">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-neutral-200">
              Nome
            </label>
            <input type="text" id="name" name="name" className="mt-1 block px-3 py-2 rounded-md shadow-sm focus:ring-[#222C55] focus:border-[#222C55] sm:text-sm border-[1px] border-neutral-600" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-neutral-200">
              Mensagem
            </label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:ring-[#222C55] focus:border-[#222C55] sm:text-sm border-[1px] border-neutral-600"></textarea>
          </div>
          <button type="submit" className="inline-flex items-center px-6 md:px-12 py-2 border border-transparent shadow-sm text-sm font-medium text-white rounded-md bg-[#222C55] hover:bg-[#303e74] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Enviar
          </button>
        </form>
      </section> 
    </main>
  );
}