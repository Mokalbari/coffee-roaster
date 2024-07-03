import "../styles/PlanCard.css"

interface PlanCardType {
  key: number
  index: string
  title: string
  description: string
}

const PlanCard = ({ index, title, description }: PlanCardType) => {
  return (
    <div className="plan-card">
      <div className="header --l">{index}</div>
      <h3 className="header --s"> {title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default PlanCard
