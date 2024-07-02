
export default function CardServices({ title, description }) {
  return (
    <div className="bg-dark_middle w-full rounded-lg p-6 flex flex-col gap-3">
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{description}</p>
      <div>
        <a href="https://wa.me/5492213649961" target="_blank" className="text-white bg-dark_btn border border-gray py-2 px-6 rounded-lg hover:opacity-50 cursor-pointer flex items-center gap-2 w-max">  Empeza Ya! </a>
      </div>
    </div>
  )
}
