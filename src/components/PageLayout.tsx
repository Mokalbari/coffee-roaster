import NavigationBar from "./NavigationBar"
import FooterNavigation from "./FooterNavigation"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <NavigationBar />
      {children}
      <FooterNavigation />
    </>
  )
}

export default PageLayout
