import Container from "./Container"
import { Link } from "react-router-dom"
import iconClose from "../assets/shared/mobile/icon-close.svg"
import logo from "../assets/shared/desktop/logo.svg"
import { navBarLinks } from "../lib/mappingArray"

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ isOpen, setIsOpen }: Props) => {
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <Container className="">
      <nav className="absolute left-0 top-0 z-10 h-screen w-full bg-neutral-white">
        <div className="mb-20 flex items-center justify-between px-4 py-10">
          <img
            src={logo}
            alt="Coffee Roasters"
            className="h-auto w-1/3 min-w-44"
          />
          <img onClick={handleClick} src={iconClose} alt="Close the menu" />
        </div>
        <menu className="text-center font-serif text-2xl font-extrabold">
          {navBarLinks.map(item => (
            <li key={item.id} className="mb-8">
              <Link to={item.path}>{item.link}</Link>
            </li>
          ))}
        </menu>
      </nav>
    </Container>
  )
}

export default Menu
