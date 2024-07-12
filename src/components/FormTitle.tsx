import arrowIcon from "../assets/plan/desktop/icon-arrow.svg"

type Props = {
  sectionTitle: string
}

const FormTitle = ({ sectionTitle }: Props) => {
  return (
    <div className="mb-8 flex items-center justify-between font-serif text-2xl font-extrabold text-neutral-grey">
      <h2 className="">{sectionTitle}</h2>
      <img src={arrowIcon} alt="expand the menu" />
    </div>
  )
}

export default FormTitle
