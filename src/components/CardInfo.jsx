import { CarbonCategories } from "./icons/CarbonCategories";

export default function CardInfo() {
  return (
    <div className=" flex flex-col items-start justify-between w-[400px] h-[235px] p-6 bg-dark_middle rounded-lg overflow-hidden">
      <div className="p-3 w-[40px] flex justify-center items-center bg-dark_btn rounded-full">
        <CarbonCategories className='' />
      </div>
      <div className="text-left">
        <h3 className="font-bold">Recursos</h3>
        <p className="font-light">Aprende con nuestros cursos gratuitos.</p>
      </div>
      <div>
        <a className="text-white bg-dark_btn border border-gray py-2 px-6 rounded-lg hover:opacity-50 cursor-pointer">Ver recursos</a>
      </div>
    </div>
  )
}
