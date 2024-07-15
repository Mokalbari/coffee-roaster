type Props = {
  key: number
  title: string
  value: string
  text: string
  name: string
  selected: boolean
  onClick: () => void
}

const SubscriptionCard = ({
  title,
  value,
  text,
  name,
  selected,
  onClick,
}: Props) => {
  return (
    <div
      className={`rounded-xl p-6 hover:bg-accent-secondary ${selected ? "bg-accent-primary text-neutral-white" : "bg-neutral-lightgrey"}`}
      onClick={onClick}
    >
      <h3 className="mb-2 font-serif text-2xl font-extrabold sm:mb-6">
        {title}
      </h3>
      <label>
        <input
          required={true}
          className="hidden"
          type="radio"
          name={name}
          value={value}
          checked={selected}
          onClick={onClick}
        />
        {text}
      </label>
    </div>
  )
}

export default SubscriptionCard
