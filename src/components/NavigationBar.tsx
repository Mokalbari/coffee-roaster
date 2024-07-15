import { useState } from "react"
import { navBarLinks } from "../lib/mappingArray"
import Container from "./Container"
import Menu from "./Menu"
import burgerIcon from "../assets/shared/mobile/icon-hamburger.svg"
import { Link } from "react-router-dom"
// import closeIcon from "../assets/shared/mobile/icon-close.svg"
import coffeeBeans from "../assets/shared/desktop/logo.svg"

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <Container>
      <nav className="relative flex w-full items-center justify-between py-10">
        <img
          src={coffeeBeans}
          alt="Coffee Roasters"
          className="h-auto w-1/3 min-w-44"
        />
        <img
          onClick={handleClick}
          src={burgerIcon}
          alt="Open the menu"
          className="sm:hidden"
        />
        <menu className="hidden gap-8 font-sans font-semibold uppercase text-neutral-grey sm:flex">
          {navBarLinks.map(link => (
            <li className="primary-navigation__list-item" key={link.id}>
              <Link to={link.path}>{link.link}</Link>
            </li>
          ))}
        </menu>
      </nav>
      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </Container>
  )
}

export default NavigationBar
