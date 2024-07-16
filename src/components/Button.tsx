type Props = {
  text: string
  type: "submit" | "reset" | "button"
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const Button = ({ text, disabled, className, type, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`min-w-fit rounded-lg bg-accent-primary px-8 py-4 font-serif text-xl font-extrabold text-neutral-white hover:bg-accent-hover disabled:bg-neutral-lightgrey ${className || ""}`}
    >
      {text}
    </button>
  )
}

export default Button
