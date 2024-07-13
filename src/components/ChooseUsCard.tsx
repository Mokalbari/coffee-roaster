interface Props {
  key: number
  imgSrc: string
  title: string
  textContent: string
}

const ChooseUsCard = ({ imgSrc, title, textContent }: Props) => {
  return (
    <div className="mx-auto flex max-w-4/5 flex-col items-center rounded-xl bg-accent-primary px-8 py-16 text-center sm:py-8 sm:max-lg:flex-row sm:max-lg:gap-16 sm:max-lg:text-left lg:max-w-sm lg:p-16">
      <img src={imgSrc} alt={title} className="my-auto mb-8 sm:max-lg:my-0" />
      <div className="card-container__text-container">
        <h3 className="mb-4 font-serif text-2xl font-semibold">{title}</h3>
        <p className="lg:max-w-60">{textContent}</p>
      </div>
    </div>
  )
}

export default ChooseUsCard
