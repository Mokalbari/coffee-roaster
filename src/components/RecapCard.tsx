import { useContext } from "react"
import { FormContext } from "../context/FormContext"

const RecapCard = () => {
  const { userSelection } = useContext(FormContext)

  return (
    <>
      <section className="mb-14 rounded-xl bg-neutral-black p-8 text-neutral-white">
        <h2 className="mb-4 uppercase opacity-50">Order summary</h2>
        <blockquote className="font-serif text-2xl font-extrabold">
          <span className="">"</span> I drink my coffee as{" "}
          <span className="text-accent-primary">{userSelection.brewing}</span>,{" "}
          {userSelection.brewing === "Capsules" ? "using" : "with a"}{" "}
          <span className="text-accent-primary">{userSelection.beanTypes}</span>{" "}
          type of bean.{" "}
          <span className="text-accent-primary">
            {userSelection.quantities}
          </span>{" "}
          {userSelection.brewing !== "Capsules" && (
            <>
              ground a la{" "}
              <span className="text-accent-primary">
                {userSelection.grindOptions}
              </span>
            </>
          )}
          , sent to me{" "}
          <span className="text-accent-primary">
            {userSelection.deliveryOptions}
          </span>
          .<span>"</span>
        </blockquote>
      </section>
    </>
  )
}

export default RecapCard
