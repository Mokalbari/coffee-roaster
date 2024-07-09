import { coffeeSubscriptionSteps } from "../lib/mappingArray"
import PlanCard from "./PlanCard"
import Container from "./Container"
import Button from "./Button"

const Plan = () => {
  return (
    <Container className="max-w-[95%]">
      <section className="mt-[80vh] flex flex-col items-center sm:items-start">
        <h2 className="mb-20 text-center font-serif text-2xl font-extrabold text-neutral-grey">
          How it works
        </h2>
        <div className="">
          <div className="" />
          <hr className="" />
          <div className="" />
          <hr className="" />
          <div className="" />
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
        <Button text="Create your plan" className="self-center" />
      </section>
    </Container>
  )
}

export default Plan
