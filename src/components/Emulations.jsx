
export default function Emulations() {
  return (
    <section className="p-12 ">
      <div className="border border-dark_middle rounded-lg relative p-3">
        <h2 className="text-left mb-4 font-pixel_digivolve text-2xl">Emulaciones Laborales</h2>
        <p className="text-left ">Desarrolla un proyecto colaborativo en un entorno laboral simulado y gana experiencia.</p>
        {/* Aquí se cargan los proyectos */}
        <div className="mt-4 flex flex-wrap gap-4 mb-20">

          <div className="w-[48%] flex  items-center gap-2 p-2 rounded-lg border border-transparent hover:border-middle hover:bg-dark_middle">
            <div className="p-4 bg-dark_btn rounded-lg">
              <span className="icon-[pajamas--work]"></span>
            </div>
            <h4 className="">Suma experiencia laboral</h4>
          </div>


          <div className="w-[48%] flex  items-center gap-2 p-2 rounded-lg border border-transparent hover:border-dark_middle hover:bg-dark_middle">
            <div className="p-4 bg-dark_btn rounded-lg">
              <span className="icon-[ph--medal]"></span>
            </div>
            <h4 className="">Recibi un certificado</h4>
          </div>

          <div className="w-[48%] flex  items-center gap-2 p-2 rounded-lg border border-transparent hover:border-middle hover:bg-dark_middle">
            <div className="p-4 bg-dark_btn rounded-lg">
              <span className="icon-[nimbus--peso]"></span>
            </div>
            <h4 className="">Gratis e Ilimitado</h4>
          </div>

          <div className="w-[48%] flex  items-center gap-2 p-2 rounded-lg border border-transparent hover:border-middle hover:bg-dark_middle">
            <div className="p-4 bg-dark_btn rounded-lg">
              <span className="icon-[icon-park-outline--workbench]"></span>
            </div>
            <h4 className="">Suma un proyecto a tu porfolio</h4>
          </div>
        </div>

        <a href="https://forms.gle/CyYBK3Y4zgWtcVbEA" target="_blank" className="flex items-center justify-between absolute bottom-0 left-0 p-6 w-full bg-dark_middle hover:opacity-50">
          <h2 className="text-left font-pixel_digivolve text-xl">Inscribite</h2>
          <span className="icon-[mdi--arrow-right]"></span>
        </a>
      </div>
    </section>
  )
}
