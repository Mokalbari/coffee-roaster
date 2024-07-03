import "../styles/CoffeeCard.css"

interface CoffeeCardType {
  key: number
  imgSrc: string
  title: string
  text: string
}

const CoffeeCard = ({ imgSrc, title, text }: CoffeeCardType) => {
  return (
    <div className="coffee-card">
      <img src={imgSrc} alt={title} />
      <h3 className="header --xs">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default CoffeeCard
