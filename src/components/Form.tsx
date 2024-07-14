// import { useState } from "react"
import OrderSummary from "./OrderSummary"
import { useMediaQuery } from "react-responsive"
import FormStepProgression from "../components/FormStepProgression"
import FormStep from "../components/FormStep"
import Container from "../components/Container"
import coffeeSubscriptionData from "../lib/coffeeSubscriptionData"
import RecapCard from "../components/RecapCard"
import Button from "../components/Button"
import type { CoffeeStepsName } from "../lib/coffeeSubscriptionData"

const Form = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" })

  return (
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
            type="button"
            text="Create my plan!"
            className="mb-32 sm:self-center lg:self-end"
            disabled={false} // Here the button must be disabled if all input radio are not checked.
          />
        </form>
      </section>
      <OrderSummary />
    </Container>
  )
}

export default Form
