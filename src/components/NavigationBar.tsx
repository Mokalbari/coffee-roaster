import { navBarLinks } from "../lib/mappingArray"
import Container from "./Container"
import burgerIcon from "../assets/shared/mobile/icon-hamburger.svg"
// import closeIcon from "../assets/shared/mobile/icon-close.svg"
import coffeeBeans from "../assets/shared/desktop/logo.svg"

const NavigationBar = () => {
  return (
    <Container>
      <nav className="flex w-full items-center justify-between py-10 sm:mb-14">
        <img
          src={coffeeBeans}
          alt="Coffee Roasters"
          className="h-auto w-1/3 min-w-44"
        />
        <img src={burgerIcon} alt="Open the menu" className="sm:hidden" />
        <menu className="hidden gap-8 font-sans font-semibold uppercase text-neutral-grey sm:flex">
          {navBarLinks.map(link => (
            <li className="primary-navigation__list-item" key={link.id}>
              {link.link}
            </li>
          ))}
        </menu>
      </nav>
    </Container>
  )
}

export default NavigationBar
