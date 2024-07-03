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
      <div className="card-container__text-container">
        <h3 className="header --xs">{title}</h3>
        <p>{textContent}</p>
      </div>
    </div>
  )
}

export default ChooseUsCard
