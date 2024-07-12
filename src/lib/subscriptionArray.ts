export type CoffeeType = {
  id: number
  type: string
  description: string
  section: string
}

export const coffeeBrewing: CoffeeType[] = [
  {
    id: 1,
    type: "Capsule",
    description: "Compatible with Nespresso systems and similar brewers",
    section: "How do you drink your coffee?",
  },
  {
    id: 2,
    type: "Filter",
    description:
      "For pour over or drip methods like Aeropress, Chemex, and V60",
    section: "How do you drink your coffee?",
  },
  {
    id: 3,
    type: "Espresso",
    description:
      "Dense and finely ground beans for an intense, flavorful experience",
    section: "How do you drink your coffee?",
  },
]

export const coffeeTypes: CoffeeType[] = [
  {
    id: 1,
    type: "Single Origin",
    description:
      "Distinct, high quality coffee from a specific family-owned farm",
    section: "What type of coffee?",
  },
  {
    id: 2,
    type: "Decaf",
    description:
      "Just like regular coffee, except the caffeine has been removed",
    section: "What type of coffee?",
  },
  {
    id: 3,
    type: "Blended",
    description:
      "Combination of two or three dark roasted beans of organic coffees",
    section: "What type of coffee?",
  },
]

export const coffeeQuantities: CoffeeType[] = [
  {
    id: 1,
    type: "250g",
    description:
      "Perfect for the solo drinker. Yields about 12 delicious cups.",
    section: "How much would you like?",
  },
  {
    id: 2,
    type: "500g",
    description:
      "Perfect option for a couple. Yields about 40 delectable cups.",
    section: "How much would you like?",
  },
  {
    id: 3,
    type: "1000g",
    description:
      "Perfect for offices and events. Yields about 90 delightful cups.",
    section: "How much would you like?",
  },
]

export const coffeeGrindOptions: CoffeeType[] = [
  {
    id: 1,
    type: "Wholebean",
    description: "Best choice if you cherish the full sensory experience",
    section: "Want us to grind them?",
  },
  {
    id: 2,
    type: "Filter",
    description:
      "For drip or pour-over coffee methods such as V60 or Aeropress",
    section: "Want us to grind them?",
  },
  {
    id: 3,
    type: "Cafetiére",
    description: "Course ground beans specially suited for french press coffee",
    section: "Want us to grind them?",
  },
]

export const coffeeDeliveryOptions: CoffeeType[] = [
  {
    id: 1,
    type: "Every week",
    description: "$7.20 per shipment. Includes free first-class shipping.",
    section: "How often should we deliver?",
  },
  {
    id: 2,
    type: "Every 2 weeks",
    description: "$9.60 per shipment. Includes free priority shipping.",
    section: "How often should we deliver?",
  },
  {
    id: 3,
    type: "Every month",
    description: "$12.00 per shipment. Includes free priority shipping.",
    section: "How often should we deliver?",
  },
]
