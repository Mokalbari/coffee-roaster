import PlanHero from "../components/PlanHero"
import PlanSelection from "../components/PlanSelectionLayout"
import FormStep from "../components/FormStep"
import {
  coffeeBrewing,
  coffeeTypes,
  coffeeQuantities,
  coffeeGrindOptions,
  coffeeDeliveryOptions,
} from "../lib/subscriptionArray"

const PlanPage = () => {
  return (
    <main>
      <PlanHero />
      <PlanSelection />
      <form action="post">
        <FormStep coffeeArray={coffeeBrewing} />
        <FormStep coffeeArray={coffeeTypes} />
        <FormStep coffeeArray={coffeeQuantities} />
        <FormStep coffeeArray={coffeeGrindOptions} />
        <FormStep coffeeArray={coffeeDeliveryOptions} />
      </form>
    </main>
  )
}

export default PlanPage
