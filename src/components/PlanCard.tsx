import type { Variants } from "framer-motion"
import { easeIn, motion } from "framer-motion"
interface Props {
  key: number
  index: string
  title: string
  description: string
  variants: Variants
}

const PlanCard = ({ index, title, description, variants }: Props) => {
  return (
    <motion.li
      variants={variants}
      className="mb-14 flex max-w-sm flex-col items-center sm:max-w-60 sm:items-start"
    >
      <div className="mb-6 font-serif text-7xl font-extrabold text-accent-secondary">
        {index}
      </div>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: easeIn }}
        viewport={{ once: true }}
        className="mb-6 font-serif text-3xl font-extrabold"
      >
        {" "}
        {title}
      </motion.h3>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.6, ease: easeIn }}
        viewport={{ once: true }}
        className="text-center sm:text-left"
      >
        {description}
      </motion.p>
    </motion.li>
  )
}

export default PlanCard
