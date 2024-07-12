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
      className={`p-6 hover:bg-accent-secondary ${selected ? "bg-accent-primary text-neutral-white" : "bg-neutral-lightgrey"}`}
      onClick={onClick}
    >
      <h3 className="font-serif text-2xl">{title}</h3>
      <label>
        <input
          className="hidden"
          type="radio"
          name={name}
          value={value}
          checked={selected}
        />
        {text}
      </label>
    </div>
  )
}

export default SubscriptionCard
