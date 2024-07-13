import { Link } from "react-router-dom"
import Button from "./Button"
import Container from "./Container"

const HeroSection = () => {
  return (
    <Container className="mb-28 sm:mb-32 lg:mb-36">
      <section className="rounded-xl bg-hero-img-mobile bg-cover bg-center bg-no-repeat py-24 sm:bg-hero-img-tablet lg:bg-hero-img-desktop lg:py-28">
        <div className="px-8 text-neutral-white sm:px-14">
          <h1 className="mb-6 text-center font-serif text-[2.5rem] font-bold leading-10 sm:w-2/3 sm:text-left sm:text-[3rem] lg:w-2/3 lg:text-[4.5rem] lg:leading-[4rem]">
            Great coffee <br /> made simple.
          </h1>
          <p className="mb-10 text-center opacity-90 sm:w-2/3 sm:text-left lg:mb-14 lg:w-1/3">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <div className="text-center sm:text-left">
            <Link to="/create-a-plan">
              <Button text="Create your plan" />
            </Link>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default HeroSection
