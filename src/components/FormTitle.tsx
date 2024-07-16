import { motion } from "framer-motion"
import arrowIcon from "/assets/plan/desktop/icon-arrow.svg"

type Props = {
  sectionTitle: string
  className: string | boolean
  onClick: () => void
  isToggled: boolean
}

const FormTitle = ({ sectionTitle, className, onClick, isToggled }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`mb-8 flex cursor-pointer items-center justify-between font-serif text-2xl font-extrabold text-neutral-grey ${className}`}
    >
      <h2 className="">{sectionTitle}</h2>
      <motion.img
        animate={{ rotate: isToggled ? 180 : 0 }}
        src={arrowIcon}
        alt="expand the menu"
      />
    </div>
  )
}

export default FormTitle
