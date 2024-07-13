type Props = {
  children: React.ReactNode
}

const PlanTextSection = ({ children }: Props) => {
  return (
    <section className="mb-[15vh] flex flex-col items-center rounded-xl bg-neutral-black px-4 py-20 text-neutral-white sm:items-start lg:px-16">
      <div className="plan__decoration-container">
        <div className="circle" />
        <hr />
        <div className="circle" />
        <hr />
        <div className="circle" />
      </div>
      <div className="flex w-full flex-col sm:flex-row sm:justify-start sm:gap-4 lg:gap-36">
        {children}
      </div>
    </section>
  )
}

export default PlanTextSection
