import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

type Props = {
  children: React.ReactNode
  variants: Variants
}

const PlanTextSection = ({ children, variants }: Props) => {
  return (
    <section className="mb-[15vh] flex flex-col items-center rounded-xl bg-neutral-black px-4 py-20 text-neutral-white sm:items-start lg:px-16">
      <div className="plan__decoration-container">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scale: [0, 1, 1.5, 1], opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="circle"
        />
        <motion.hr
          initial={{ scaleX: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="origin-left"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scale: [0, 1, 1.5, 1], opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="circle"
        />
        <motion.hr
          initial={{ scaleX: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="origin-left"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scale: [0, 1, 1.5, 1], opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="circle"
        />
      </div>
      <motion.ul
        variants={variants}
        className="flex w-full flex-col sm:flex-row sm:justify-start sm:gap-4 lg:gap-36"
      >
        {children}
      </motion.ul>
    </section>
  )
}

export default PlanTextSection
