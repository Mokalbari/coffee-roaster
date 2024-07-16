import Container from "./Container"
import { motion, easeIn } from "framer-motion"

const PlanHero = () => {
  return (
    <Container>
      <section className="mb-32 rounded-xl bg-plan-bg-mobile bg-cover bg-center bg-no-repeat pb-20 pt-28 leading-8 sm:mb-36 sm:bg-plan-bg-tablet sm:py-28 lg:mb-40 lg:bg-plan-bg-desktop lg:py-36">
        <div className="px-8 text-neutral-white sm:px-14">
          <motion.h1
            initial={{ opacity: 0, y: 25, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ease: easeIn }}
            className="mb-8 text-center font-serif text-3xl font-bold leading-10 sm:w-2/3 sm:text-left sm:text-[3rem] lg:w-2/3 lg:text-[4.5rem] lg:leading-[4rem]"
          >
            Create a plan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: easeIn }}
            className="mb-10 text-center sm:w-2/3 sm:text-left lg:mb-14 lg:w-1/3"
          >
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </motion.p>
        </div>
      </section>
    </Container>
  )
}

export default PlanHero
