import { coffeeSubscriptionSteps } from "../lib/mappingArray"
import PlanCard from "./PlanCard"
import PlanTextSection from "./PlanTextSection"
import Container from "./Container"
import { useMediaQuery } from "react-responsive"
import type { Variants } from "framer-motion"
import "../styles/Plan.css"

const PlanSelectionLayout = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" })

  const list: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.9,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const listItem: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }

  const planCards = coffeeSubscriptionSteps.map(item => (
    <PlanCard
      variants={listItem}
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
          <PlanTextSection variants={list}>{planCards}</PlanTextSection>
        </Container>
      ) : (
        <PlanTextSection variants={list}>{planCards}</PlanTextSection>
      )}
    </>
  )
}

export default PlanSelectionLayout
