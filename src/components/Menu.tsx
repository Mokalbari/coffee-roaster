import Container from "./Container"
import { Link } from "react-router-dom"
import iconClose from "/assets/shared/mobile/icon-close.svg"
import logo from "/assets/shared/desktop/logo.svg"
import { navBarLinks } from "../lib/mappingArray"
import { motion } from "framer-motion"

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ isOpen, setIsOpen }: Props) => {
  const handleClick = () => setIsOpen(!isOpen)

  const menuAnimationVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  }

  const linksVariants = {
    initial: {
      y: "-30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <Container className="">
      <motion.nav
        variants={menuAnimationVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute left-0 top-0 z-10 h-screen w-full origin-top bg-neutral-white"
      >
        <div className="mb-20 flex items-center justify-between px-4 py-10">
          <img
            src={logo}
            alt="Coffee Roasters"
            className="h-auto w-1/3 min-w-44"
          />
          <img onClick={handleClick} src={iconClose} alt="Close the menu" />
        </div>
        <menu className="overflow-hidden text-center font-serif text-2xl font-extrabold">
          {navBarLinks.map(item => (
            <motion.li
              variants={linksVariants}
              initial="initial"
              animate="open"
              key={item.id}
              className="mb-8"
              onClick={handleClick}
            >
              <Link to={item.path}>{item.link}</Link>
            </motion.li>
          ))}
        </menu>
      </motion.nav>
    </Container>
  )
}

export default Menu
