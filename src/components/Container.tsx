interface Props {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => (
  <div className={`container mx-auto px-8 ${className || ""}`}>{children}</div>
)

export default Container
