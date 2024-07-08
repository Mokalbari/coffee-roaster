interface Props {
  key: number
  imgSrc: string
  title: string
  text: string
}

const CoffeeCard = ({ imgSrc, title, text }: Props) => {
  return (
    <div className="mb-12 flex flex-col items-center justify-evenly text-center sm:max-lg:flex-row sm:max-lg:items-start sm:max-lg:text-left">
      <img
        src={imgSrc}
        alt={title}
        className="h-auto max-w-xs lg:mb-16 lg:max-w-56"
      />
      <div className="">
        <h3 className="mb-4 font-serif text-2xl font-bold sm:mb-6">{title}</h3>
        <p className="max-w-64">{text}</p>
      </div>
    </div>
  )
}

export default CoffeeCard

// w-1/2
// sm:max-lg:w-1/2
