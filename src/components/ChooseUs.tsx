import Container from "./Container"
import ChooseUsCard from "./ChooseUsCard"
import { chooseUsTextContent } from "../lib/mappingArray"
import { easeIn, motion } from "framer-motion"
import type { Variants } from "framer-motion"

const ChooseUs = () => {
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

  const listItem: Variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50, transition: { duration: 2 } },
  }

  return (
    <Container>
      <section className="relative mb-[500px] min-h-[1000px] rounded-xl bg-neutral-black px-6 pt-16 text-center text-neutral-white sm:mb-96 sm:max-h-[50vh] sm:min-h-[500px] sm:pb-16 lg:mb-60">
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: easeIn, duration: 0.2 }}
          className="mb-4 font-serif text-2xl font-extrabold sm:mb-8 sm:text-3xl"
        >
          Why Choose us?
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: easeIn, duration: 0.2 }}
          className="mx-auto mb-8 leading-7 sm:mb-12 sm:w-1/2"
        >
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </motion.p>
        <motion.ul
          variants={list}
          viewport={{ once: true, margin: "-200px" }}
          initial={"hidden"}
          whileInView={"visible"}
          className="absolute flex flex-col gap-6 lg:flex-row"
        >
          {chooseUsTextContent.map(item => (
            <ChooseUsCard
              key={item.id}
              imgSrc={item.img}
              title={item.title}
              textContent={item.description}
              variants={listItem}
            />
          ))}
        </motion.ul>
      </section>
    </Container>
  )
}

export default ChooseUs
