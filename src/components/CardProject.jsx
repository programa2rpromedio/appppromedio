
export default function CardProject() {
  return (
    <a className="block w-[400px] h-[365px]  border border-dark_middle rounded-lg overflow-hidden">
      <div className="w-full h-[235px]  hover:scale-105">
        <img src="/public/santa.png" className="w-full h-full object-cover cursor-pointer" alt="santa rosa" />
      </div>
      <div className="text-left p-4 bg-dark_middle">
        <h3 className="font-bold">Santa Rosa</h3>
        <p>
          Santa Rosa es un proyecto de software diseñado para facilitar la gestión de eventos de reuniones y celebraciones.
        </p>
      </div>
    </a>
  )
}
