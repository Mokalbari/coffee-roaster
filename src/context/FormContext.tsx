import { createContext, useState } from "react"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

type Type = {
  isToggled: boolean
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
  isCapsuleSelected: boolean
  setIsCapsuleSelected: React.Dispatch<React.SetStateAction<boolean>>
  userChoice: string[]
  setUserChoice: React.Dispatch<React.SetStateAction<never[]>>
}

const defaultFormContext: Type = {
  isToggled: false,
  setIsToggled: () => {},
  isCapsuleSelected: false,
  setIsCapsuleSelected: () => {},
  userChoice: [],
  setUserChoice: () => {},
}

export const FormContext = createContext(defaultFormContext)

export const FormContextProvider = ({ children }: Props) => {
  const [isToggled, setIsToggled] = useState(defaultFormContext.isToggled)
  const [isCapsuleSelected, setIsCapsuleSelected] = useState(
    defaultFormContext.isCapsuleSelected,
  )
  const [userChoice, setUserChoice] = useState([])

  return (
    <FormContext.Provider
      value={{
        isToggled,
        setIsToggled,
        isCapsuleSelected,
        setIsCapsuleSelected,
        userChoice,
        setUserChoice,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
