import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import Button from "./Button"
import { useMediaQuery } from "react-responsive"

type Props = {
  className?: string
}

const OrderSummary = ({ className }: Props) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" })
  const { userSelection } = useContext(FormContext)
  const totalPrice = 45
  return (
    <div className={`z-10 max-w-80 rounded-xl ${className}`}>
      <h2 className="rounded-t-xl bg-neutral-black px-6 py-7 font-serif text-[28px] font-extrabold text-neutral-white">
        Order summary
      </h2>
      <section className="rounded-b-xl px-6 pt-8">
        <blockquote className="font-serif text-2xl font-extrabold text-neutral-grey">
          <span className="">"</span> I drink my coffee{" "}
          {userSelection.brewing === "Capsules" ? "using" : "as"}{" "}
          <span className="text-accent-primary">{userSelection.brewing}</span>,{" "}
          with a{" "}
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
        <p className="my-4 opacity-80">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.{" "}
        </p>
        <Button
          type="submit"
          text={isSmallScreen ? `Checkout - $${totalPrice}/mo` : "Checkout"}
          className="my-10"
        />
      </section>
    </div>
  )
}

export default OrderSummary
