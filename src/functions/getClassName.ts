// Define a function to determine the class based on userSelection
import type { CoffeeStepsName } from "../lib/coffeeSubscriptionData"

const getClassName = (
  step: CoffeeStepsName,
  userSelection: Record<CoffeeStepsName, string>,
  classOutput: string,
): string | false => {
  return userSelection[step] !== "_____" && classOutput
}

export default getClassName
