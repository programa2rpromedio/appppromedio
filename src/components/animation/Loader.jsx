import './animation.css'
export default function Loader() {
  return (
    <div className=" w-full h-[100vh]  flex flex-col items-center justify-center gap-y-4 bg-dark">

      <img src="/Isotipo.png" alt="Logo" className="w-1/3 bounce-in-top" />
      <img src="/logotipo.png" alt="Logo" className="w-1/3 puff-in-center" />
    </div>
  )
}
