import { useContext, useRef, useEffect } from "react"
import { FormContext } from "../context/FormContext"
import Button from "./Button"
import { useMediaQuery } from "react-responsive"
import calculateShipment from "../functions/calculateShipment"
import "../styles/dialogBackdrop.css"

type Props = {
  className?: string
  open: boolean
  close: () => void
}

const OrderSummary = ({ className, open, close }: Props) => {
  const dialog = useRef<HTMLDialogElement>(null)
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" })
  const { userSelection } = useContext(FormContext)

  useEffect(() => {
    open ? dialog.current?.showModal() : dialog.current?.close()
  }, [open])

  const totalPrice = calculateShipment(
    userSelection.quantities,
    userSelection.deliveryOptions,
  )

  return (
    <dialog
      ref={dialog}
      onClose={close}
      className={`z-10 w-4/5 max-w-lg rounded-xl ${className}`}
    >
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
        {isSmallScreen ? (
          <Button
            onClick={() => dialog.current?.close()}
            type="submit"
            text={`Checkout - $${totalPrice}/mo`}
            className="my-10"
          />
        ) : (
          <div className="flex items-center justify-center gap-8">
            <span className="font-serif text-3xl font-extrabold">{`$${totalPrice} / mo`}</span>{" "}
            <Button
              onClick={() => dialog.current?.close()}
              className="my-10 px-12"
              text="Checkout"
              type="submit"
            />{" "}
          </div>
        )}
      </section>
    </dialog>
  )
}

export default OrderSummary
