import "../styles/HeroSection.css"
import Button from "./Button"

const HeroSection = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero__text-container">
          <h1 className="header --l hero__title">Great coffee made simple.</h1>
          <p className="hero__text">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Button text="Create your plan" />
        </div>
      </section>
    </div>
  )
}

export default HeroSection
