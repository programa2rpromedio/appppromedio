import CardServices from "../components/CardServices"
import { services } from "../data"
export default function Services() {
  return (
    <section className='p-8 2xl:p-12'>
      <div className="text-left">
        <h1 className='text-white text-5xl font-pixel_digivolve '>Servicios</h1>
        <h2 className="mt-4 text-3xl text-white">Combinando tecnología y funcionalidad, nuestros servicios transforman ideas en <strong className="text-gray">productos digitales.</strong></h2>
      </div>
      <div className="text-left mt-4 flex gap-4">
        <a href="https://calendly.com/programadorpromedio/30min" target="_blank" className="text-white bg-dark_btn border border-gray py-2 px-6 rounded-lg hover:opacity-50 cursor-pointer flex items-center gap-2"> <span className="icon-[bx--calendar]"></span> Consultoria gratis</a>
      </div>

      <section className=' mt-16 flex flex-wrap justify-between gap-y-4'>
        {services.map((s) => <CardServices key={s.id} {...s} />)}

      </section>

    </section>
  )
}
