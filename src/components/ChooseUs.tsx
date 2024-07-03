import "../styles/ChooseUs.css"
import ChooseUsCard from "./ChooseUsCard"
import { chooseUsTextContent } from "../lib/mappingArray"

const ChooseUs = () => {
  return (
    <div className="container">
      <section className="choose-us">
        <h2 className="header --m">Why Choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="choose-us__card-container">
          {chooseUsTextContent.map(item => (
            <ChooseUsCard
              key={item.id}
              imgSrc={item.img}
              title={item.title}
              textContent={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ChooseUs
