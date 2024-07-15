import { motion } from "framer-motion"
interface Props {
  key: number
  imgSrc: string
  title: string
  text: string
}

const CoffeeCard = ({ imgSrc, title, text }: Props) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex flex-col items-center justify-evenly text-center sm:max-lg:flex-row sm:max-lg:items-start sm:max-lg:text-left"
    >
      <img
        src={imgSrc}
        alt={title}
        className="h-auto max-w-xs lg:mb-16 lg:max-w-56"
      />
      <div className="">
        <h3 className="mb-4 font-serif text-2xl font-bold sm:mb-6">{title}</h3>
        <p className="max-w-64">{text}</p>
      </div>
    </motion.li>
  )
}

export default CoffeeCard
