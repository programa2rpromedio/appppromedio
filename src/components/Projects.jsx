import Card from "./Card"

export default function Projects() {
  return (
    <section className="p-12 border mt-8">
      <h2 className="text-left mb-4 font-pixel_digivolve">Nuevos lanzamientos.</h2>
      {/* Aquí se cargan los proyectos */}
      <div className="flex justify-between">
        <Card />
        <Card />
      </div>
    </section>
  )
}
