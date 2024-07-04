import CardProject from '../components/CardProject'
import { projects } from '../data'


export default function Projects() {
  return (
    <section className='p-8 2xl:p-12'>
      <div className="text-left">
        <h2 className='text-white text-5xl font-pixel_digivolve '>Proyectos</h2>
        <h1 className="mt-4 text-3xl text-white">Desarrollamos páginas web, herramientas y software, <strong className="text-gray">a medida y de alta calidad.</strong></h1>
      </div>
      <section className=' mt-16 flex flex-wrap flex-col items-center md:flex-row justify-between gap-y-4'>
        {
          projects.map((p) => <CardProject key={p.id} {...p} />)
        }
      </section>

    </section>
  )
}
