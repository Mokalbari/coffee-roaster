import Container from "./Container"
import ChooseUsCard from "./ChooseUsCard"
import { chooseUsTextContent } from "../lib/mappingArray"

const ChooseUs = () => {
  return (
    <Container>
      <section className="max-h-svh rounded-xl bg-neutral-black px-6 pt-16 text-center text-neutral-white sm:max-h-[50vh] sm:pb-16">
        <h2 className="mb-4 font-serif text-2xl font-extrabold sm:mb-8 sm:text-3xl">
          Why Choose us?
        </h2>
        <p className="mx-auto mb-8 leading-7 sm:mb-12 sm:max-w-[75%]">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="flex flex-col gap-6 lg:flex-row">
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
    </Container>
  )
}

export default ChooseUs
