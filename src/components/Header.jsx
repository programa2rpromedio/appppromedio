import { MdiWhatsapp } from "./icons/MdiWhatsapp";

export default function Header() {
  return (
    <section className="p-12">
      <div className="text-left">
        <h1 className='text-white text-5xl font-pixel_digivolve '>Hola, soy Programador <br />Promedio.</h1>
        <h2 className="mt-4 text-3xl text-white">Diseño y desarrollo <strong className="text-gray"> productos digitales.</strong></h2>
      </div>
      <div className="text-left mt-4 flex gap-4">
        <a className="text-white bg-gray border border-gray py-2 px-6 rounded-lg hover:opacity-50 cursor-pointer">Nosotros</a>
        <a className="text-white bg-transparent border border-gray py-2 px-6 rounded-lg hover:opacity-50 cursor-pointer flex items-center gap-2">
          <MdiWhatsapp />
          Contactanos
        </a>
      </div>
    </section>
  )
}
