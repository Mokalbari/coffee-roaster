import Container from "./Container"
import { addresses } from "../lib/mappingArray"
import HeadquarterCard from "./HeadquarterCard"

const Headquarter = () => {
  return (
    <Container className="my-28 lg:my-36">
      <section className="flex flex-col items-center sm:items-start lg:mx-20">
        <h2 className="mb-20 font-serif text-2xl font-extrabold text-neutral-grey">
          Our headquarters
        </h2>
        <div className="flex w-full flex-col sm:flex-row sm:gap-16 lg:gap-32">
          {addresses.map(item => (
            <HeadquarterCard
              key={item.key}
              imgSrc={item.imgSrc}
              country={item.country}
              address={item.address}
              city={item.city}
              location={item.location}
              phone={item.phone}
              className=""
            />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Headquarter
