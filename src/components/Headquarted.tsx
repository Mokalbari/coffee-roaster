import Container from "./Container"
import { addresses } from "../lib/mappingArray"
import HeadquarterCard from "./HeadquarterCard"
import type { Variants } from "framer-motion"
import { motion } from "framer-motion"

const Headquarter = () => {
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
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  return (
    <Container className="my-28 lg:my-36">
      <section className="flex flex-col items-center sm:items-start lg:mx-20">
        <h2 className="mb-20 font-serif text-2xl font-extrabold text-neutral-grey">
          Our headquarters
        </h2>
        <motion.ul
          transition={{ type: "spring" }}
          viewport={{ margin: "-200px", once: true }}
          variants={list}
          initial="hidden"
          whileInView="visible"
          className="flex w-full flex-col sm:flex-row sm:gap-16 lg:gap-32"
        >
          {addresses.map(item => (
            <HeadquarterCard
              variants={listItem}
              key={item.key}
              imgSrc={item.imgSrc}
              country={item.country}
              address={item.address}
              city={item.city}
              location={item.location}
              phone={item.phone}
              className=""
            />
          ))}
        </motion.ul>
      </section>
    </Container>
  )
}

export default Headquarter
