import type { Variants } from "framer-motion"
import { motion } from "framer-motion"
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
      <h3 className="mb-6 font-serif text-3xl font-extrabold"> {title}</h3>
      <p className="text-center sm:text-left">{description}</p>
    </motion.li>
  )
}

export default PlanCard
