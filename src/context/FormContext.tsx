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
}

const defaultFormContext: Type = {
  isToggled: false,
  setIsToggled: () => {},
  isCapsuleSelected: false,
  setIsCapsuleSelected: () => {},
}

export const FormContext = createContext(defaultFormContext)

export const FormContextProvider = ({ children }: Props) => {
  const [isToggled, setIsToggled] = useState(defaultFormContext.isToggled)
  const [isCapsuleSelected, setIsCapsuleSelected] = useState(
    defaultFormContext.isCapsuleSelected,
  )

  return (
    <FormContext.Provider
      value={{
        isToggled,
        setIsToggled,
        isCapsuleSelected,
        setIsCapsuleSelected,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
