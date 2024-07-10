import granEspresso from "../assets/home/desktop/image-gran-espresso.png"
import planalto from "../assets/home/desktop/image-planalto.png"
import picollo from "../assets/home/desktop/image-piccollo.png"
import danche from "../assets/home/desktop/image-danche.png"

import coffeeBean from "../assets/home/desktop/icon-coffee-bean.svg"
import gift from "../assets/home/desktop/icon-gift.svg"
import truck from "../assets/home/desktop/icon-truck.svg"

import ukImg from "../assets/about/desktop/illustration-uk.svg"
import canadaImg from "../assets/about/desktop/illustration-canada.svg"
import australiaImg from "../assets/about/desktop/illustration-australia.svg"

type NavbarType = {
  id: number,
  link: string
}
export const navBarLinks: NavbarType[] = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "About us",
  },
  {
    id: 3,
    link: "Create your plan",
  },
]

type CoffeeSelectionType = {
  id: number,
  image: string,
  name: string,
  description: string
}

export const coffeeSelection: CoffeeSelectionType[] = [
  {
    id: 1,
    image: granEspresso,
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    id: 2,
    image: planalto,
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    id: 3,
    image: picollo,
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    id: 4,
    image: danche,
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
]

type ChooseUsType = {
  id: number,
  img: string,
  title: string,
  description: string
}

export const chooseUsTextContent: ChooseUsType[] = [
  {
    id: 1,
    img: coffeeBean,
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    id: 2,
    img: gift,
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    id: 3,
    img: truck,
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
]

type SubscriptionType = {
  index: number,
  title: string,
  description: string
}

export const coffeeSubscriptionSteps: SubscriptionType[] = [
  {
    index: 1,
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    index: 2,
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    index: 3,
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
]

export type AddressesType = {
  key: number,
  imgSrc: string,
  country: string,
  address: string,
  city: string,
  location: string,
  phone: string,
}

export const addresses: AddressesType[] = [
  {
    key: 1,
    imgSrc: ukImg,
    country: "United Kingdom",
    address: "68 Asfordby Rd",
    city: "Alcaston",
    location: "SY6 1YA",
    phone: "+44 1241 918425"
  },
  {
    key: 2,
    imgSrc: canadaImg,
    country: "Canada",
    address: "1528 Eglinton Avenue",
    city: "Toronto",
    location: "Ontario M4P 1A6",
    phone: "+1 416 485 2997"
  },
  {
    key: 3,
    imgSrc: australiaImg,
    country: "Australia",
    address: "36 Swanston Street",
    city: "Kewell",
    location: "Victoria",
    phone: "+61 4 9928 3629"
  }
];

console.log(addresses);
