import React from "react"
import ReactDOM from "react-dom/client"

import "./styles/fonts.css"
import "./styles/index.css"

import NavigationBar from "./components/NavigationBar"
import FooterNavigation from "./components/FooterNavigation"
import AboutUsPage from "./pages/AboutUsPage"

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavigationBar />
    <AboutUsPage />
    <FooterNavigation />
  </React.StrictMode>,
)
