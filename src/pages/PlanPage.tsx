import { useMediaQuery } from "react-responsive"
import PlanHero from "../components/PlanHero"
import FormStepProgression from "../components/FormStepProgression"
import PlanSelection from "../components/PlanSelectionLayout"
import FormStep from "../components/FormStep"
import Container from "../components/Container"
import {
  coffeeBrewing,
  coffeeTypes,
  coffeeQuantities,
  coffeeGrindOptions,
  coffeeDeliveryOptions,
} from "../lib/subscriptionArray"

const coffeeGlobalArray = [
  coffeeBrewing,
  coffeeTypes,
  coffeeQuantities,
  coffeeGrindOptions,
  coffeeDeliveryOptions,
]

const PlanPage = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" })

  return (
    <main>
      <PlanHero />
      <PlanSelection />
      <Container>
        <section className="gap-32 lg:flex">
          {isLargeScreen && (
            <aside className="w-1/3">
              {coffeeGlobalArray.map((array, index) => (
                <FormStepProgression
                  coffeeArray={array}
                  key={index}
                  index={index}
                />
              ))}
            </aside>
          )}
          <form action="post">
            {/* This component has two children : a title and a card.
            It's main focus is to pass props down to children */}
            {coffeeGlobalArray.map((array, index) => (
              <FormStep coffeeArray={array} key={index} />
            ))}
          </form>
        </section>
      </Container>
    </main>
  )
}

export default PlanPage
