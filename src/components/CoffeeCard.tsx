interface CoffeeCardType {
  key: number
  imgSrc: string
  title: string
  text: string
}

const CoffeeCard = ({ imgSrc, title, text }: CoffeeCardType) => {
  return (
    <div className="flex flex-col items-center text-center sm:flex sm:flex-row sm:items-center sm:justify-evenly lg:flex-col">
      <img
        src={imgSrc}
        alt={title}
        className="mb-4 w-full sm:w-1/4 lg:w-full"
      />
      <div className="w-full sm:flex sm:flex-col sm:text-left lg:text-center">
        <h3 className="mb-4 font-serif text-2xl font-bold">{title}</h3>
        <p className="mb-16 sm:max-w-xs">{text}</p>
      </div>
    </div>
  )
}

export default CoffeeCard
