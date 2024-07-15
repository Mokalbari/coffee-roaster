import Form from "../components/Form"
import PlanHero from "../components/PlanHero"
import PlanSelection from "../components/PlanSelectionLayout"
import { FormContextProvider } from "../context/FormContext"

const PlanPage = () => {
  return (
    <main>
      <PlanHero />
      <PlanSelection />
      <FormContextProvider>
        <Form />
      </FormContextProvider>
    </main>
  )
}

export default PlanPage
