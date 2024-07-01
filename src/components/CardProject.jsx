
export default function CardProject({ title, description, image, link }) {
  return (
    <a href={link || '#'} target="_blank" className="block w-[400px] h-[365px]  border border-dark_middle rounded-lg overflow-hidden">
      <div className="w-full h-[235px]  hover:scale-105">
        <img src={image} className="w-full h-full object-cover cursor-pointer" alt={`Proyecto ${title}`} />
      </div>
      <div className="text-left p-4 bg-dark_middle h-full">
        <h3 className="font-bold">{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </a>
  )
}
