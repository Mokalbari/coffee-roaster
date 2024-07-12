import { useState } from "react"
import Container from "./Container"
import FormTitle from "./FormTitle"
import SubscriptionCard from "./SubscriptionCard"
import type { CoffeeType } from "../lib/subscriptionArray"

type Props = {
  coffeeArray: CoffeeType[]
}

const FormStep = ({ coffeeArray }: Props) => {
  const [selected, setSelected] = useState<string | null>(null)
  const handleSelect = (name: string) => () => setSelected(name)

  return (
    <Container>
      <FormTitle sectionTitle={coffeeArray[0].section} />
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
    </Container>
  )
}

export default FormStep
