import React from "react"
import ReactDOM from "react-dom/client"

import "./styles/fonts.css"
import "./styles/index.css"

import NavigationBar from "./components/NavigationBar"
import HeroSection from "./components/HeroSection"
import CoffeeSelection from "./components/CoffeeSelection"

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavigationBar />
    <HeroSection />
    <CoffeeSelection />
  </React.StrictMode>,
)
