import { Link } from "react-router-dom"
import { coffeeSubscriptionSteps } from "../lib/mappingArray"
import "../styles/Plan.css"
import PlanCard from "./PlanCard"
import Container from "./Container"
import Button from "./Button"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const Plan = () => {
  const list: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
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

  return (
    <Container className="max-w-[95%]">
      <section className="mb-[15vh] flex flex-col items-center sm:items-start">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-20 text-center font-serif text-2xl font-extrabold text-neutral-grey"
        >
          How it works
        </motion.h2>
        <div className="plan__decoration-container">
          <div className="circle" />
          <hr />
          <div className="circle" />
          <hr />
          <div className="circle" />
        </div>
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="visible"
          className="flex w-full flex-col sm:flex-row sm:justify-start sm:gap-4 lg:gap-36"
        >
          {coffeeSubscriptionSteps.map(item => (
            <PlanCard
              key={item.index}
              index={`0${item.index}`}
              title={item.title}
              description={item.description}
              variants={listItem}
            />
          ))}
        </motion.ul>
        <Link to="/create-a-plan">
          <Button
            type="button"
            text="Create your plan"
            className="self-center sm:self-start"
          />
        </Link>
      </section>
    </Container>
  )
}

export default Plan
