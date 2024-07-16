import React from "react"
import ReactDOM from "react-dom/client"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import "./styles/fonts.css"
import "./styles/index.css"

import Home from "./pages/Home"
import PlanPage from "./pages/PlanPage"
import AboutUsPage from "./pages/AboutUsPage"
import PageLayout from "./components/PageLayout"

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageLayout>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.25 }}
              >
                <Home />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <PageLayout>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.25 }}
              >
                <AboutUsPage />
              </motion.div>
            </PageLayout>
          }
        />
        <Route
          path="/create-a-plan"
          element={
            <PageLayout>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.25 }}
              >
                <PlanPage />
              </motion.div>
            </PageLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
