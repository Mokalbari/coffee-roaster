import Container from "./Container"
import commitmentImgMobile from "/assets/about/mobile/image-commitment.jpg"
import commitmentImgTablet from "/assets/about/tablet/image-commitment.jpg"
import commitmentImgDesktop from "/assets/about/desktop/image-commitment.jpg"
import { easeInOut, motion } from "framer-motion"

const Commitment = () => {
  return (
    <Container>
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:justify-evenly">
        <div>
          <picture>
            {/* Version desktop */}
            <source srcSet={commitmentImgDesktop} media="(min-width: 1024px)" />
            {/* Version tablet */}
            <source srcSet={commitmentImgTablet} media="(min-width: 640px)" />
            {/* Version mobile */}
            <motion.img
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ ease: easeInOut, delay: 0.5 }}
              className="mb-12 rounded-xl"
              src={commitmentImgMobile}
              alt="A coffee roaster making coffee art"
            />
          </picture>
        </div>
        <div className="text-center sm:w-1/2 sm:text-left">
          <motion.h2
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ type: "spring", delay: 0.1, bounce: 0.3 }}
            className="mb-8 font-serif text-3xl font-extrabold lg:text-[40px]"
          >
            Our commitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.3, delay: 0.1 }}
          >
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </motion.p>
        </div>
      </section>
    </Container>
  )
}

export default Commitment
