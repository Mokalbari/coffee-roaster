import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

type Props = {
  key: number
  title: string
  value: string
  text: string
  name: string
  selected: boolean
  onClick: () => void
  variants: Variants
}

const SubscriptionCard = ({
  title,
  value,
  text,
  name,
  selected,
  onClick,
  variants,
}: Props) => {
  return (
    <motion.div
      variants={variants}
      className={`rounded-xl p-6 hover:bg-accent-secondary ${selected ? "bg-accent-primary text-neutral-white" : "bg-neutral-lightgrey"}`}
      onClick={onClick}
    >
      <h3 className="mb-2 font-serif text-2xl font-extrabold sm:mb-6">
        {title}
      </h3>
      <label>
        <input
          required={true}
          className="hidden"
          type="radio"
          name={name}
          value={value}
          checked={selected}
          onChange={onClick}
        />
        {text}
      </label>
    </motion.div>
  )
}

export default SubscriptionCard
