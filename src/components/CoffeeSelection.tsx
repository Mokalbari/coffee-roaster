import CoffeeCard from "./CoffeeCard"
import Container from "./Container"
import { coffeeSelection } from "../lib/mappingArray"
import "../styles/CoffeeSelection.css"
import type { Variants } from "framer-motion"
import { motion } from "framer-motion"

const CoffeeSelection = () => {
  const list: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }

  return (
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        viewport={{ margin: "-200px", once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gradient text-center font-serif text-[40px] font-extrabold sm:text-[96px] sm:max-md:text-[80px] lg:text-[150px]"
      >
        Our collection
      </motion.h2>
      <motion.ul
        viewport={{ margin: "-200px", once: true }}
        variants={list}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col flex-wrap gap-8 sm:-translate-y-10 lg:-translate-y-20 lg:flex-row lg:justify-center"
      >
        {coffeeSelection.map(coffee => (
          <CoffeeCard
            key={coffee.id}
            imgSrc={coffee.image}
            title={coffee.name}
            text={coffee.description}
            variants={item} // Pass the item variant here
          />
        ))}
      </motion.ul>
    </Container>
  )
}

export default CoffeeSelection
