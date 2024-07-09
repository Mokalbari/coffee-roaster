import React from "react"
import ReactDOM from "react-dom/client"

import "./styles/fonts.css"
import "./styles/index.css"

import NavigationBar from "./components/NavigationBar"
import HeroSection from "./components/HeroSection"
import CoffeeSelection from "./components/CoffeeSelection"
import ChooseUs from "./components/ChooseUs"
import Plan from "./components/Plan"

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavigationBar />
    <HeroSection />
    <CoffeeSelection />
    <ChooseUs />
    <Plan />
  </React.StrictMode>,
)
