import { useState } from "react"
import Form from "../components/Form"
import PlanHero from "../components/PlanHero"
import PlanSelection from "../components/PlanSelectionLayout"
import { FormContextProvider } from "../context/FormContext"
import OrderSummary from "../components/OrderSummary"

const PlanPage = () => {
  const [isModalToggled, setIsModalToggled] = useState(false)

  const handleDialogClose = () => setIsModalToggled(false)

  return (
    <main>
      <PlanHero />
      <PlanSelection />
      <FormContextProvider>
        <Form setIsModalToggled={setIsModalToggled} />
        {isModalToggled && (
          <OrderSummary open={isModalToggled} close={handleDialogClose} />
        )}
      </FormContextProvider>
    </main>
  )
}

export default PlanPage
