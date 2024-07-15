import { createContext, useState } from "react"
import type coffeeSubscriptionData from "../lib/coffeeSubscriptionData"
import type { ReactNode } from "react"
import type { CoffeeStepsName } from "../lib/coffeeSubscriptionData"

// This iterates over each key K in the union type CoffeeStepsName.
// CoffeeStepsName is a union type of string literals:
// "brewing" | "beanTypes" | "quantities" | "grindOptions" | "deliveryOptions".

type SubscriptionEntries = {
  [K in CoffeeStepsName]: (typeof coffeeSubscriptionData)[K][number]["type"]
}[CoffeeStepsName]

// The user choice can be both an empty string "_____" or a key in the SubcriptionEntry
type ValidSubscriptionEntries = SubscriptionEntries | "_____"

// This is defining Props and Type for the context
type Props = {
  children: ReactNode
}

type Type = {
  isToggled: boolean
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
  userSelection: Record<CoffeeStepsName, ValidSubscriptionEntries>
  setUserSelection: React.Dispatch<
    React.SetStateAction<Record<CoffeeStepsName, string>>
  >
  formComplete: boolean
  setFormComplete: React.Dispatch<React.SetStateAction<boolean>>
}

// Default values that are passed to the context down below.
const defaultFormContext: Type = {
  isToggled: false,
  setIsToggled: () => {},
  userSelection: {
    brewing: "_____",
    beanTypes: "_____",
    quantities: "_____",
    grindOptions: "_____",
    deliveryOptions: "_____",
  },
  setUserSelection: () => {},
  formComplete: false,
  setFormComplete: () => {},
}
export const FormContext = createContext(defaultFormContext)

// This initialize states and creates a Provider
export const FormContextProvider = ({ children }: Props) => {
  const [isToggled, setIsToggled] = useState(defaultFormContext.isToggled)
  const [userSelection, setUserSelection] = useState(
    defaultFormContext.userSelection,
  )
  const [formComplete, setFormComplete] = useState(
    defaultFormContext.formComplete,
  )

  return (
    <FormContext.Provider
      value={{
        isToggled,
        setIsToggled,
        userSelection,
        setUserSelection,
        formComplete,
        setFormComplete,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
