import Container from "./Container"
import Button from "./Button"

type Props = {
  brewing?: string
  type?: string
  quantity?: string
  grind?: string
  delivery?: string
}

const RecapCard = ({ brewing, type, quantity, grind, delivery }: Props) => {
  const placeHolder = "_____"

  return (
    <Container className="flex flex-col">
      <section className="mb-14 rounded-xl bg-neutral-black p-8 text-neutral-white">
        <h2 className="mb-4 uppercase opacity-50">Order summary</h2>
        <blockquote className="font-serif text-2xl font-extrabold">
          <span className="">"</span> I drink my coffee as{" "}
          <span className="text-accent-primary">{brewing || placeHolder}</span>,{" "}
          {brewing === "Capsules" ? "using" : "with a"}{" "}
          <span className="text-accent-primary">{type || placeHolder}</span>{" "}
          type of bean.{" "}
          <span className="text-accent-primary">{quantity || placeHolder}</span>{" "}
          {brewing !== "Capsules" && (
            <>
              ground a la{" "}
              <span className="text-accent-primary">
                {grind || placeHolder}
              </span>
            </>
          )}
          , sent to me{" "}
          <span className="text-accent-primary">{delivery || placeHolder}</span>
          .<span>"</span>
        </blockquote>
      </section>
      <Button text="Create my plan!" className="mb-32 self-center" />
    </Container>
  )
}

export default RecapCard
