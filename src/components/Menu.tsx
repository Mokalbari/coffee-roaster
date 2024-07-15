import iconClose from "../assets/shared/mobile/icon-close.svg"
import logo from "../assets/shared/desktop/logo.svg"

const Menu = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="Coffee Roasters" />
        <img src={closeIcon} alt="Close the menu" />
      </div>
      <menu>
        <li>Home</li>
        <li>About us</li>
        <li>Create Your Plan</li>
      </menu>
    </nav>
  )
}

export default Menu
