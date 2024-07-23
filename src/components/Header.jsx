import { MdiWhatsapp } from "./icons/MdiWhatsapp";

export default function Header() {
  return (
    <section className="p-8 2xl:p-12">
      <div className="text-left">
        <h1 className='text-white text-4xl lg:text-5xl font-pixel_digivolve '>Hey! soy Programador <br />Promedio.</h1>
        <h2 className="mt-4 text-3xl text-white">Diseño y desarrollo <strong className="text-gray"> productos digitales.</strong></h2>
        {/* <h1 className="mt-4 text-3xl text-white font-pixel_digivolve ">AGENCIA DIGITAL</h1> */}
      </div>
      <div className="text-left mt-4 max-[505px]:flex-col  flex flex-row flex-wrap gap-4">
        <a href="https://calendly.com/programadorpromedio/30min" target="_blank" className="text-white bg-dark_btn border border-gray py-2 px-6 rounded-lg hover:opacity-50 cursor-pointer flex items-center gap-2"> <span className="icon-[bx--calendar]"></span> Consultoría gratis</a>
        <a href="https://wa.me/5492213649961" target="_blank" className="text-white bg-transparent border border-gray py-2 px-6 rounded-lg hover:opacity-50 cursor-pointer flex items-center gap-2 ">
          <MdiWhatsapp />
          Contáctanos
        </a>
      </div>
    </section>
  )
}
