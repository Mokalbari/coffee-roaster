import React from "react"
import ReactDOM from "react-dom/client"

import "./styles/reset.css"
import "./styles/index.css"

import NavigationBar from "./components/NavigationBar"
import HeroSection from "./components/HeroSection"
import FooterNavigation from "./components/FooterNavigation"

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <NavigationBar />
      <HeroSection />
      <FooterNavigation />
    </div>
  </React.StrictMode>,
)
