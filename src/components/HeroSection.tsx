import Button from "./Button"
import Container from "./Container"

const HeroSection = () => {
  return (
    <Container className="mb-28 sm:mb-32 lg:mb-36 ">
      <section className="bg-hero-img-mobile bg-no-repeat bg-center bg-cover py-24 rounded-xl sm:bg-hero-img-tablet lg:bg-hero-img-desktop lg:py-28">
        <div className="text-neutral-white px-8 sm:px-14">
          <h1 className="font-serif text-[2.5rem] leading-10 text-center mb-6 font-bold sm:text-[3rem] sm:text-left sm:w-2/3 lg:text-[4.5rem] lg:w-1/3 lg:leading-[4rem]">
            Great coffee made simple.
          </h1>
          <p className="text-center opacity-90 mb-10 sm:text-left sm:w-2/3 lg:w-1/3 lg:mb-14">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <div className="text-center sm:text-left">
            <Button text="Create your plan" />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default HeroSection
