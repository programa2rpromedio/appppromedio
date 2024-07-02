import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className='w-3/4 h-[100vh] m-auto flex flex-col items-center justify-center gap-y-4'>
      <img src='/public/Isologo.webp' className="w-1/3" />
      <strong className="font-pixel_digivolve text-3xl text-red-600">Hmm! Algo va mal</strong>
      <Link to='/' className="hover:text-[#6cce54] text-xl">Volver al inicio</Link>
    </div>
  )
}
