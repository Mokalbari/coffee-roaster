import type { Variants } from "framer-motion"
import { motion } from "framer-motion"
import type { AddressesType } from "../lib/mappingArray"

interface Props extends AddressesType {
  key: number
  className?: string
  variants: Variants
}

const HeadquarterCard = ({
  imgSrc,
  country,
  address,
  city,
  location,
  phone,
  className,
  variants,
}: Props) => {
  return (
    <motion.li
      variants={variants}
      className={`flex flex-col items-center sm:items-start ${className || ""}`}
    >
      <img src={imgSrc} alt={country} className="mb-8" />
      <h3 className="mb-6 font-serif text-3xl font-extrabold">{country}</h3>
      <div className="mb-20 text-center sm:text-left">
        <p>{address}</p>
        <p>{city}</p>
        <p>{location}</p>
        <p>{phone}</p>
      </div>
    </motion.li>
  )
}

export default HeadquarterCard
