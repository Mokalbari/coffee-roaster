import ChooseUs from "../components/ChooseUs"
import CoffeeSelection from "../components/CoffeeSelection"
import HeroSection from "../components/HeroSection"
import Plan from "../components/Plan"

const Home = () => {
  return (
    <main className="home">
      <HeroSection />
      <CoffeeSelection />
      <ChooseUs />
      <Plan />
    </main>
  )
}

export default Home
