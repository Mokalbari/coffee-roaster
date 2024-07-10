import { coffeeSubscriptionSteps } from "../lib/mappingArray"
import PlanCard from "./PlanCard"
import Container from "../components/Container"
import "../styles/Plan.css"

const PlanSelection = () => {
  return (
    <Container className="">
      <section className="mb-[15vh] flex flex-col items-center rounded-xl bg-neutral-black px-4 py-20 text-neutral-white sm:items-start">
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
      </section>
    </Container>
  )
}

export default PlanSelection
