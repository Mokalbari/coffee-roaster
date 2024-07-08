interface Props {
  text: string
  disabled?: boolean
  className?: string
}

const Button = ({ text, disabled, className }: Props) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`py-4 px-16 bg-accent-primary rounded-lg text-neutral-white text-xl font-semibold hover:bg-accent-hover disabled:bg-neutral-lightgrey min-w-fit ${className || ""}`}
    >
      {text}
    </button>
  )
}

export default Button
