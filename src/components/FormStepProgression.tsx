import type { CoffeeType } from "../lib/subscriptionArray"
type Props = {
  coffeeArray: CoffeeType[]
  key: number
  index: number
}

const FormStepProgression = ({ coffeeArray, index }: Props) => {
  return (
    <p className="text-xl2 border-b-2 py-6 font-serif font-extrabold text-neutral-grey first:pt-0">
      <span className="mr-7">0{index + 1}</span> {coffeeArray[0].step}
    </p>
  )
}

export default FormStepProgression
