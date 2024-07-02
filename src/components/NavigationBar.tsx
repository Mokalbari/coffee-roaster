import { navBarLinks } from "../lib/mappingArray"

import "../styles/NavigationBar.css"
import coffeeBeans from "../assets/shared/desktop/logo.svg"

const NavigationBar = () => (
  <nav className="container primary-navigation">
    <img
      src={coffeeBeans}
      alt="Coffee Roasters"
      className="primary-navigation__logo"
    />
    <menu className="primary-navigation__menu">
      {navBarLinks.map(link => (
        <li className="primary-navigation__list-item" key={link.id}>
          {link.link}
        </li>
      ))}
    </menu>
  </nav>
)

export default NavigationBar
