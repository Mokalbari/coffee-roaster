import { coffeeSubscriptionSteps } from "../lib/mappingArray"
import PlanCard from "./PlanCard"
import PlanTextSection from "./PlanTextSection"
import Container from "./Container"
import { useMediaQuery } from "react-responsive"
import "../styles/Plan.css"

const PlanSelectionLayout = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" })

  const planCards = coffeeSubscriptionSteps.map(item => (
    <PlanCard
      key={item.index}
      index={`0${item.index}`}
      title={item.title}
      description={item.description}
    />
  ))

  return (
    <>
      {isLargeScreen ? (
        <Container className="">
          <PlanTextSection>{planCards}</PlanTextSection>
        </Container>
      ) : (
        <PlanTextSection>{planCards}</PlanTextSection>
      )}
    </>
  )
}

export default PlanSelectionLayout
