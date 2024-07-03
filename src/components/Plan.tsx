import "../styles/Plan.css"
import { coffeeSubscriptionSteps } from "../lib/mappingArray"
import PlanCard from "./PlanCard"
import Button from "./Button"

const Plan = () => {
  return (
    <div className="container">
      <section className="plan">
        <h2 className="header --xs">How it works</h2>
        <div className="plan__decoration-container">
          <div className="circle" />
          <hr />
          <div className="circle" />
          <hr />
          <div className="circle" />
        </div>
        <div className="plan__card-container">
          {coffeeSubscriptionSteps.map(item => (
            <PlanCard
              key={item.index}
              index={`0${item.index}`}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <Button text="Create your plan" />
      </section>
    </div>
  )
}

export default Plan
