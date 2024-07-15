import arrowIcon from "../assets/plan/desktop/icon-arrow.svg"

type Props = {
  sectionTitle: string
  className: string | boolean
  onClick: () => void
}

const FormTitle = ({ sectionTitle, className, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`mb-8 flex cursor-pointer items-center justify-between font-serif text-2xl font-extrabold text-neutral-grey ${className}`}
    >
      <h2 className="">{sectionTitle}</h2>
      <img src={arrowIcon} alt="expand the menu" />
    </div>
  )
}

export default FormTitle
