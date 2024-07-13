import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./styles/fonts.css"
import "./styles/index.css"

import Home from "./pages/Home"
import PlanPage from "./pages/PlanPage"
import AboutUsPage from "./pages/AboutUsPage"
import PageLayout from "./components/PageLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Home />
      </PageLayout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <PageLayout>
        <AboutUsPage />
      </PageLayout>
    ),
  },
  {
    path: "/create-a-plan",
    element: (
      <PageLayout>
        <PlanPage />
      </PageLayout>
    ),
  },
])

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
