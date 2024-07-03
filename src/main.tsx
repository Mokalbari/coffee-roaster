import React from "react"
import ReactDOM from "react-dom/client"

import "./styles/reset.css"
import "./styles/index.css"

import NavigationBar from "./components/NavigationBar"
import FooterNavigation from "./components/FooterNavigation"
import Home from "./pages/Home"

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavigationBar />
    <Home />
    <FooterNavigation />
  </React.StrictMode>,
)
