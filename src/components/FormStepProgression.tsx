import type { CoffeeTypeEntry } from "../lib/coffeeSubscriptionData"
type Props = {
  coffeeArray: CoffeeTypeEntry[]
  key: string
  index: number
  classNameParagraphe: string | false
  classNameSpan: string | false
}

const FormStepProgression = ({
  coffeeArray,
  index,
  classNameParagraphe,
  classNameSpan,
}: Props) => {
  return (
    <p
      className={`border-b-2 py-6 font-serif text-2xl font-extrabold text-neutral-grey first:pt-0 ${classNameParagraphe}`}
    >
      <span className={`mr-7 ${classNameSpan}`}>0{index + 1}</span>{" "}
      {coffeeArray[0].step}
    </p>
  )
}

export default FormStepProgression
