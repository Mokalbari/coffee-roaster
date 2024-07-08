import CoffeeCard from "./CoffeeCard"
import Container from "./Container"
import { coffeeSelection } from "../lib/mappingArray"
import "../styles/CoffeeSelection.css"

const CoffeeSelection = () => {
  return (
    <Container>
      <h2 className="text-gradient text-center font-serif text-[40px] font-extrabold sm:text-[96px] sm:max-md:text-[80px] lg:text-[150px]">
        Our collection
      </h2>
      <section className="flex flex-col flex-wrap gap-8 sm:-translate-y-10 lg:-translate-y-20 lg:flex-row lg:justify-center">
        {coffeeSelection.map(item => (
          <CoffeeCard
            key={item.id}
            imgSrc={item.image}
            title={item.name}
            text={item.description}
          />
        ))}
      </section>
    </Container>
  )
}

export default CoffeeSelection
