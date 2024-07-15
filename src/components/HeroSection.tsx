import { Link } from "react-router-dom"
import Button from "./Button"
import Container from "./Container"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <Container className="mb-28 sm:mb-32 lg:mb-36">
      <section className="rounded-xl bg-hero-img-mobile bg-cover bg-center bg-no-repeat py-24 sm:bg-hero-img-tablet lg:bg-hero-img-desktop lg:py-28">
        <div className="px-8 text-neutral-white sm:px-14">
          <motion.h1
            initial={{ y: 100, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center font-serif text-[2.5rem] font-bold leading-10 sm:w-2/3 sm:text-left sm:text-[3rem] lg:w-2/3 lg:text-[4.5rem] lg:leading-[4rem]"
          >
            Great coffee <br /> made simple.
          </motion.h1>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              bounce: 0.5,
            }}
            className="mb-10 text-center opacity-90 sm:w-2/3 sm:text-left lg:mb-14 lg:w-1/3"
          >
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              bounce: 0.5,
            }}
            className="text-center sm:text-left"
          >
            <Link to="/create-a-plan">
              <Button type="button" text="Create your plan" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Container>
  )
}

export default HeroSection
