import { useContext } from "react"
import { useMediaQuery } from "react-responsive"
import FormStepProgression from "../components/FormStepProgression"
import FormStep from "../components/FormStep"
import Container from "../components/Container"
import coffeeSubscriptionData from "../lib/coffeeSubscriptionData"
import RecapCard from "../components/RecapCard"
import Button from "../components/Button"
import type { CoffeeStepsName } from "../lib/coffeeSubscriptionData"
import { FormContext } from "../context/FormContext"
import getClassName from "../functions/getClassName"

type Props = {
  setIsModalToggled: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({ setIsModalToggled }: Props) => {
  const { formComplete, userSelection } = useContext(FormContext)

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" })

  const arrayFromCoffeeSubscription = Object.entries(coffeeSubscriptionData)

  const handleClick = () => {
    setIsModalToggled(true)
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
                )}
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
    </Container>
  )
}

export default Form
