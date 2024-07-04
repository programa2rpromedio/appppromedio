import { Link } from "react-router-dom";

export default function CardInfo({ title, description, link, children }) {
  return (
    <div className=" flex flex-col items-start justify-between w-[300px] md:w-[400px] h-[235px] p-6 bg-dark_middle rounded-lg overflow-hidden">
      <div className="p-3 w-[40px] flex justify-center items-center bg-dark_btn rounded-full">
        {children}
      </div>
      <div className="text-left">
        <h3 className="font-bold">{title}</h3>
        <p className="font-light">{description}</p>
      </div>
      <div>
        <Link to={link} className="text-white bg-dark_btn border border-gray py-2 px-6 rounded-lg hover:opacity-50 cursor-pointer">Ver {title}</Link>
      </div>
    </div>
  )
}
