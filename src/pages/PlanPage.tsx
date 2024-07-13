import { useMediaQuery } from "react-responsive"
import PlanHero from "../components/PlanHero"
import FormStepProgression from "../components/FormStepProgression"
import PlanSelection from "../components/PlanSelectionLayout"
import FormStep from "../components/FormStep"
import Container from "../components/Container"
import { FormContextProvider } from "../context/FormContext"
import coffeeSubscriptionData from "../lib/coffeeSubscriptionData"
import RecapCard from "../components/RecapCard"
import Button from "../components/Button"
import type { CoffeeStepsName } from "../lib/coffeeSubscriptionData"

const PlanPage = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" })

  return (
    <main>
      <PlanHero />
      <PlanSelection />
      <FormContextProvider>
        <Container>
          <section className="gap-32 lg:flex">
            {isLargeScreen && (
              <aside className="w-1/3">
                {Object.entries(coffeeSubscriptionData).map(
                  ([step, entries], index) => (
                    <FormStepProgression
                      coffeeArray={Object.values(entries)}
                      key={step}
                      index={index}
                    />
                  ),
                )}
              </aside>
            )}
            <form action="post" className="flex flex-col">
              {/* This component has two children : a title and a card.
              It's main focus is to pass props down to children */}
              {Object.entries(coffeeSubscriptionData).map(([step, entries]) => (
                <FormStep
                  coffeeArray={Object.values(entries)}
                  key={step}
                  step={step as CoffeeStepsName}
                />
              ))}
              <RecapCard />
              <Button
                text="Create my plan!"
                className="mb-32 sm:self-center lg:self-end"
              />
            </form>
          </section>
        </Container>
      </FormContextProvider>
    </main>
  )
}

export default PlanPage
