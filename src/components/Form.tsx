import { useState, useContext } from "react"
import OrderSummary from "./OrderSummary"
import { useMediaQuery } from "react-responsive"
import FormStepProgression from "../components/FormStepProgression"
import FormStep from "../components/FormStep"
import Container from "../components/Container"
import coffeeSubscriptionData from "../lib/coffeeSubscriptionData"
import RecapCard from "../components/RecapCard"
import Button from "../components/Button"
import type { CoffeeStepsName } from "../lib/coffeeSubscriptionData"
import { FormContext } from "../context/FormContext"

const Form = () => {
  const [modal, setModal] = useState(false)
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" })
  const { formComplete, userSelection } = useContext(FormContext)
  const handleClick = () => setModal(true)
  const arrayFromCoffeeSubscription = Object.entries(coffeeSubscriptionData)

  // Define a function to determine the class based on userSelection
  const getClassName = (
    step: CoffeeStepsName,
    userSelection: Record<CoffeeStepsName, string>,
    classOutput: string,
  ): string | false => {
    return userSelection[step] !== "_____" && classOutput
  }

  return (
    <Container>
      <section className="gap-32 lg:flex">
        {isLargeScreen && (
          <aside className="w-1/3">
            {arrayFromCoffeeSubscription.map(([step, entries], index) => (
              <FormStepProgression
                classNameParagraphe={getClassName(
                  step as CoffeeStepsName,
                  userSelection,
                  "text-slate-900",
                )} // entry === index ?
                classNameSpan={getClassName(
                  step as CoffeeStepsName,
                  userSelection,
                  "text-accent-primary",
                )}
                coffeeArray={Object.values(entries)}
                key={step}
                index={index}
              />
            ))}
          </aside>
        )}
        <form action="post" className="flex flex-col">
          {/* This component has two children : a title and a card.
              It's main focus is to pass props down to children */}
          {arrayFromCoffeeSubscription.map(([step, entries]) => (
            <FormStep
              coffeeArray={Object.values(entries)}
              key={step}
              step={step as CoffeeStepsName}
            />
          ))}
          <RecapCard />
          <Button
            onClick={handleClick}
            type="button"
            text="Create my plan!"
            className="mb-32 sm:self-center lg:self-end"
            disabled={!formComplete} // Here the button must be disabled if all input radio are not checked.
          />
        </form>
      </section>
      {modal && <OrderSummary />}
    </Container>
  )
}

export default Form
