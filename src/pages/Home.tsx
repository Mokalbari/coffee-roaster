import ChooseUs from "../components/ChooseUs"
import CoffeeSelection from "../components/CoffeSelection"
import HeroSection from "../components/HeroSection"
import Plan from "../components/Plan"
import "../styles/Home.css"

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
