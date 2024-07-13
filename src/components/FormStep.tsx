import { useState } from "react"
import FormTitle from "./FormTitle"
import SubscriptionCard from "./SubscriptionCard"
import type { CoffeeTypeEntry } from "../lib/coffeeSubscriptionData"

type Props = {
  coffeeArray: CoffeeTypeEntry[]
}

const FormStep = ({ coffeeArray }: Props) => {
  const [selected, setSelected] = useState<string | null>(null)
  const handleSelect = (name: string) => () => setSelected(name)

  return (
    <>
      <FormTitle sectionTitle={coffeeArray[0].section} />
      <div className="mb-28 grid cursor-pointer gap-4 sm:min-h-64 sm:grid-flow-col">
        {coffeeArray.map(coffee => (
          <SubscriptionCard
            onClick={handleSelect(coffee.type)}
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
