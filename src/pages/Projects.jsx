import CardProject from '../components/CardProject'
import { projects } from '../data'


export default function Projects() {
  return (
    <section className='p-12'>
      <div className="text-left">
        <h1 className='text-white text-5xl font-pixel_digivolve '>Proyectos</h1>
        <h2 className="mt-4 text-3xl text-white">Desarrollamos paginas web, herramientas y software <strong className="text-gray">a medida y de alta calidad.</strong></h2>
      </div>
      <section className=' mt-4 flex flex-wrap justify-between gap-y-4'>
        {
          projects.map((p) => <CardProject key={p.id} {...p} />)
        }
      </section>

    </section>
  )
}
