import CoffeeCard from "./CoffeeCard"
import Container from "./Container"
import { coffeeSelection } from "../lib/mappingArray"
import "../styles/CoffeeSelection.css"
import { motion } from "framer-motion"

const CoffeeSelection = () => {
  return (
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        viewport={{ amount: "all", once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gradient text-center font-serif text-[40px] font-extrabold sm:text-[96px] sm:max-md:text-[80px] lg:text-[150px]"
      >
        Our collection
      </motion.h2>
      <ul className="flex flex-col flex-wrap gap-8 sm:-translate-y-10 lg:-translate-y-20 lg:flex-row lg:justify-center">
        {coffeeSelection.map(item => (
          <CoffeeCard
            key={item.id}
            imgSrc={item.image}
            title={item.name}
            text={item.description}
          />
        ))}
      </ul>
    </Container>
  )
}

export default CoffeeSelection
