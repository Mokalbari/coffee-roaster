import Container from "./Container"
import qualitymobile from "../assets/about/mobile/image-quality.jpg"
import qualitytablet from "../assets/about/tablet/image-quality.jpg"
import qualitydesktop from "../assets/about/desktop/image-quality.jpg"

const Quality = () => {
  return (
    <Container className="mt-36 lg:mt-52">
      <section className="relative rounded-xl bg-neutral-black px-6 text-neutral-white lg:px-20">
        <div className="bg-aboutUs-bg-mobile sm:bg-aboutUs-bg-tablet lg:bg-aboutUs-bg-desktop absolute inset-0 rounded-xl bg-cover bg-center bg-no-repeat opacity-75" />

        <div className="z-10 flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-8">
          <div className="-translate-y-1/4">
            <picture>
              {/* desktop version */}
              <source srcSet={qualitydesktop} media="(min-width: 1024px)" />
              {/* tablet version */}
              <source srcSet={qualitytablet} media="(min-width: 640px)" />
              {/* default mobile version */}
              <img
                className="rounded-xl"
                src={qualitymobile}
                alt="A latte coffee with a heart art on the foam"
              />
            </picture>
          </div>
          <div className="z-10 pb-16 text-center lg:w-1/2 lg:pb-28 lg:text-left">
            <h2 className="mb-6 font-serif text-3xl font-extrabold">
              Uncompromising quality
            </h2>
            <p>
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Quality
