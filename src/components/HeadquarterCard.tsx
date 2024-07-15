import type { AddressesType } from "../lib/mappingArray"

interface Props extends AddressesType {
  key: number
  className?: string
}

const HeadquarterCard = ({
  imgSrc,
  country,
  address,
  city,
  location,
  phone,
  className,
}: Props) => {
  return (
    <div
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
    </div>
  )
}

export default HeadquarterCard
