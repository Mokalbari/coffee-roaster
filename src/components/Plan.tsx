import { Link } from "react-router-dom"
import { coffeeSubscriptionSteps } from "../lib/mappingArray"
import "../styles/Plan.css"
import PlanCard from "./PlanCard"
import Container from "./Container"
import Button from "./Button"

const Plan = () => {
  return (
    <Container className="max-w-[95%]">
      <section className="mb-[15vh] flex flex-col items-center sm:items-start">
        <h2 className="mb-20 text-center font-serif text-2xl font-extrabold text-neutral-grey">
          How it works
        </h2>
        <div className="plan__decoration-container">
          <div className="circle" />
          <hr />
          <div className="circle" />
          <hr />
          <div className="circle" />
        </div>
        <div className="flex w-full flex-col sm:flex-row sm:justify-start sm:gap-4 lg:gap-36">
          {coffeeSubscriptionSteps.map(item => (
            <PlanCard
              key={item.index}
              index={`0${item.index}`}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <Link to="/create-a-plan">
          <Button
            type="button"
            text="Create your plan"
            className="self-center sm:self-start"
          />
        </Link>
      </section>
    </Container>
  )
}

export default Plan
