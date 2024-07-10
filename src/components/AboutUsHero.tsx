import Container from "./Container"

const AboutUsHero = () => {
  return (
    <Container>
      <section className="bg-aboutUs-img-mobile sm:bg-aboutUs-img-tablet lg:bg-aboutUs-img-desktop rounded-xl bg-cover bg-center bg-no-repeat pb-20 pt-28 leading-8 sm:py-28 lg:py-36">
        <div className="px-8 text-neutral-white sm:px-14">
          <h1 className="mb-8 text-center font-serif text-3xl font-bold leading-10 sm:w-2/3 sm:text-left sm:text-[3rem] lg:w-2/3 lg:text-[4.5rem] lg:leading-[4rem]">
            About Us
          </h1>
          <p className="mb-10 text-center sm:w-2/3 sm:text-left lg:mb-14 lg:w-1/3">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </section>
    </Container>
  )
}

export default AboutUsHero
