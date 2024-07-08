import { navBarLinks } from "../lib/mappingArray"
import Container from "./Container"

import burgerIcon from "../assets/shared/mobile/icon-hamburger.svg"
// import closeIcon from "../assets/shared/mobile/icon-close.svg"
import coffeeBeans from "../assets/shared/desktop/logo.svg"

const NavigationBar = () => {
  return (
    <Container>
      <nav className="py-10 flex items-center justify-between sm:mb-14">
        <img src={coffeeBeans} alt="Coffee Roasters" className="w-1/3" />
        <img src={burgerIcon} alt="Open the menu" className="sm:hidden" />
        <menu className="gap-8 uppercase font-sans font-semibold text-neutral-grey hidden sm:flex">
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
