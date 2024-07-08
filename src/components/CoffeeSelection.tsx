import CoffeeCard from "./CoffeeCard"
import Container from "./Container"
import { coffeeSelection } from "../lib/mappingArray"
import "../styles/CoffeeSelection.css"

const CoffeeSelection = () => {
  return (
    <Container>
      <h2 className="text-gradient z-0 my-8 text-center font-serif text-4xl font-extrabold sm:text-[6rem] sm:leading-tight lg:text-[156px]">
        Our collection
      </h2>
      <section className="sm:flex sm:flex-col lg:-translate-y-28 lg:flex-row lg:gap-16">
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
