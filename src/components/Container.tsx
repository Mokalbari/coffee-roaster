interface Props {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => (
  <div
    className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className || ""}`}
  >
    {children}
  </div>
)

export default Container
