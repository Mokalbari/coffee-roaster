import { useState, useContext, useEffect } from "react"
import FormTitle from "./FormTitle"
import SubscriptionCard from "./SubscriptionCard"
import { FormContext } from "../context/FormContext"
import type {
  CoffeeStepsName,
  CoffeeTypeEntry,
} from "../lib/coffeeSubscriptionData"
import type { ValidSubscriptionEntries } from "../context/FormContext"
type Props = {
  coffeeArray: CoffeeTypeEntry[]
  step: CoffeeStepsName
}

import { AnimatePresence, motion } from "framer-motion"

const FormStep = ({ coffeeArray, step }: Props) => {
  const [selected, setSelected] = useState<string | null>(null)
  const [isToggled, setIsToggled] = useState(false)
  const { userSelection, setUserSelection, setFormComplete } =
    useContext(FormContext)

  useEffect(() => {
    const checkFormComplete = () => {
      const isComplete = Object.entries(userSelection).every(
        ([key, value]: [string, ValidSubscriptionEntries]) => {
          if (key === "grindOptions" && userSelection.brewing === "Capsules") {
            return true
          }
          return value !== "_____"
        },
      )
      setFormComplete(isComplete)
    }
    checkFormComplete()
  }, [userSelection, setFormComplete])

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

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        staggerChildren: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 50,
    },
  }

  return (
    <>
      {console.log(userSelection)}
      <FormTitle
        className={
          userSelection.brewing === "Capsules" &&
          coffeeArray[0].step === "Grind Option" &&
          "text-neutral-lightgrey"
        }
        sectionTitle={coffeeArray[0].section}
        onClick={handleToggleSection(coffeeArray[0].section)}
        isToggled={isToggled}
      />
      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className={
              "mb-28 grid cursor-pointer gap-4 sm:min-h-64 sm:grid-flow-col sm:grid-cols-3"
            }
          >
            {coffeeArray.map(coffee => (
              <SubscriptionCard
                variants={itemVariants}
                onClick={handleClick(coffee.type)}
                key={coffee.id}
                title={coffee.type}
                value={coffee.type}
                name="coffee-brewing"
                text={coffee.description}
                selected={coffee.type === selected}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FormStep
