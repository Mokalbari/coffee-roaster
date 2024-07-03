import "../styles/ChooseUsCard.css"

interface ChooseUsCardType {
  key: number
  imgSrc: string
  title: string
  textContent: string
}

const ChooseUsCard = ({ imgSrc, title, textContent }: ChooseUsCardType) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={title} />
      <h3 className="header --xs">{title}</h3>
      <p>{textContent}</p>
    </div>
  )
}

export default ChooseUsCard
