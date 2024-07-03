import "../styles/CoffeeSelection.css"
import CoffeeCard from "./CoffeeCard"
import { coffeeSelection } from "../lib/mappingArray"

const CoffeeSelection = () => {
  return (
    <div className="container coffee-collection">
      <h2 className="header coffee-collection__header">Our collection</h2>
      <section className="coffee-collection__card-container">
        {coffeeSelection.map(item => (
          <CoffeeCard
            key={item.id}
            imgSrc={item.image}
            title={item.name}
            text={item.description}
          />
        ))}
      </section>
    </div>
  )
}

export default CoffeeSelection
