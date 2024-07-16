import { motion } from "framer-motion"
import Container from "./Container"

const AboutUsHero = () => {
  return (
    <Container>
      <section className="mb-32 rounded-xl bg-aboutUs-img-mobile bg-cover bg-center bg-no-repeat pb-20 pt-28 leading-8 sm:mb-36 sm:bg-aboutUs-img-tablet sm:py-28 lg:mb-40 lg:bg-aboutUs-img-desktop lg:py-36">
        <div className="px-8 text-neutral-white sm:px-14">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mb-8 text-center font-serif text-3xl font-bold leading-10 sm:w-2/3 sm:text-left sm:text-[3rem] lg:w-2/3 lg:text-[4.5rem] lg:leading-[4rem]"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring" }}
            className="mb-10 text-center sm:w-2/3 sm:text-left lg:mb-14 lg:w-1/3"
          >
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </motion.p>
        </div>
      </section>
    </Container>
  )
}

export default AboutUsHero
