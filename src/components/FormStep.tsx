import { useState, useContext } from "react"
import FormTitle from "./FormTitle"
import SubscriptionCard from "./SubscriptionCard"
import { FormContext } from "../context/FormContext"
import type {
  CoffeeStepsName,
  CoffeeTypeEntry,
} from "../lib/coffeeSubscriptionData"

type Props = {
  coffeeArray: CoffeeTypeEntry[]
  step: CoffeeStepsName
}

const FormStep = ({ coffeeArray, step }: Props) => {
  const [selected, setSelected] = useState<string | null>(null)
  const [isToggled, setIsToggled] = useState(false)
  const { userSelection, setUserSelection } = useContext(FormContext)

  const handleClick = (name: string) => () => {
    setSelected(name)
    setUserSelection(prevState => ({
      ...prevState,
      [step]: name,
    }))
  }

  const handleToggleSection = (section: string) => () => {
    if (
      section === "Want us to grind them?" &&
      userSelection.brewing === "Capsules"
    ) {
      return
    }
    setIsToggled(!isToggled)
  }

  return (
    <>
      <FormTitle
        sectionTitle={coffeeArray[0].section}
        onClick={handleToggleSection(coffeeArray[0].section)}
      />
      <div
        className={`mb-28 cursor-pointer gap-4 sm:min-h-64 sm:grid-flow-col ${isToggled ? "grid" : "hidden"}`}
      >
        {coffeeArray.map(coffee => (
          <SubscriptionCard
            onClick={handleClick(coffee.type)}
            key={coffee.id}
            title={coffee.type}
            value={coffee.type}
            name="coffee-brewing"
            text={coffee.description}
            selected={coffee.type === selected}
          />
        ))}
      </div>
    </>
  )
}

export default FormStep
