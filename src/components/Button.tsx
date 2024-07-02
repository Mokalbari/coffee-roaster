interface ButtonType {
  text: string
  disabled?: boolean
}

const Button = ({ text, disabled }: ButtonType) => (
  <button type="button" disabled={disabled} className="button">
    {text}
  </button>
)

export default Button
