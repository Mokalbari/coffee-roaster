import arrowIcon from "../assets/plan/desktop/icon-arrow.svg"

type Props = {
  sectionTitle: string
}

const FormTitle = ({ sectionTitle }: Props) => {
  return (
    <div className="flex items-center justify-between font-serif text-2xl font-extrabold text-neutral-grey">
      <h2>{sectionTitle}</h2>
      <img src={arrowIcon} alt="expand the menu" />
    </div>
  )
}

export default FormTitle
