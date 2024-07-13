import { createContext, useState } from "react"
import type coffeeSubscriptionData from "../lib/coffeeSubscriptionData"
import type { ReactNode } from "react"
import type { CoffeeStepsName } from "../lib/coffeeSubscriptionData"

// This part is creating a mapped type. It iterates over each key K in the union type CoffeeStepsName.
// CoffeeStepsName is a union type of string literals:
// "brewing" | "beanTypes" | "quantities" | "grindOptions" | "deliveryOptions".

type SubscriptionEntries = {
  [K in CoffeeStepsName]: (typeof coffeeSubscriptionData)[K][number]["type"]
}[CoffeeStepsName]

// The user choice can be both an empty string or a key in the SubcriptionEntry
type ValidSubscriptionEntries = SubscriptionEntries | ""

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
}

// Default values that are passed to the context down below.
const defaultFormContext: Type = {
  isToggled: false,
  setIsToggled: () => {},
  userSelection: {
    brewing: "",
    beanTypes: "",
    quantities: "",
    grindOptions: "",
    deliveryOptions: "",
  },
  setUserSelection: () => {},
}
export const FormContext = createContext(defaultFormContext)

// This initialize states and creates a Provider
export const FormContextProvider = ({ children }: Props) => {
  const [isToggled, setIsToggled] = useState(defaultFormContext.isToggled)
  const [userSelection, setUserSelection] = useState(
    defaultFormContext.userSelection,
  )

  return (
    <FormContext.Provider
      value={{
        isToggled,
        setIsToggled,
        userSelection,
        setUserSelection,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
