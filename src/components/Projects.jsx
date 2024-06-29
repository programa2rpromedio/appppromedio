import CardProject from "./CardProject"

export default function Projects() {
  return (
    <section className="p-12  ">
      <h2 className="text-left mb-4 font-pixel_digivolve text-2xl">Nuevos lanzamientos</h2>
      {/* Aquí se cargan los proyectos */}
      <div className="flex justify-between">
        <CardProject />
        <CardProject />
      </div>
    </section>
  )
}
