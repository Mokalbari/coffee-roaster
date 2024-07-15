type Steps =
  | "Preferences"
  | "Bean Type"
  | "Quantity"
  | "Grind Option"
  | "Deliveries"

export type CoffeeTypeEntry = {
  id: number
  type: string
  description: string
  section: string
  step: Steps
}

export type CoffeeStepsName =
  | "brewing"
  | "beanTypes"
  | "quantities"
  | "grindOptions"
  | "deliveryOptions"

const coffeeSubscriptionData: Record<
  CoffeeStepsName,
  Record<number, CoffeeTypeEntry>
> = {
  brewing: {
    1: {
      id: 1,
      type: "Capsules",
      description: "Compatible with Nespresso systems and similar brewers",
      section: "How do you drink your coffee?",
      step: "Preferences",
    },
    2: {
      id: 2,
      type: "Filter",
      description:
        "For pour over or drip methods like Aeropress, Chemex, and V60",
      section: "How do you drink your coffee?",
      step: "Preferences",
    },
    3: {
      id: 3,
      type: "Espresso",
      description:
        "Dense and finely ground beans for an intense, flavorful experience",
      section: "How do you drink your coffee?",
      step: "Preferences",
    },
  },
  beanTypes: {
    1: {
      id: 1,
      type: "Single Origin",
      description:
        "Distinct, high quality coffee from a specific family-owned farm",
      section: "What type of coffee?",
      step: "Bean Type",
    },
    2: {
      id: 2,
      type: "Decaf",
      description:
        "Just like regular coffee, except the caffeine has been removed",
      section: "What type of coffee?",
      step: "Bean Type",
    },
    3: {
      id: 3,
      type: "Blended",
      description:
        "Combination of two or three dark roasted beans of organic coffees",
      section: "What type of coffee?",
      step: "Bean Type",
    },
  },
  quantities: {
    1: {
      id: 1,
      type: "250g",
      description:
        "Perfect for the solo drinker. Yields about 12 delicious cups.",
      section: "How much would you like?",
      step: "Quantity",
    },
    2: {
      id: 2,
      type: "500g",
      description:
        "Perfect option for a couple. Yields about 40 delectable cups.",
      section: "How much would you like?",
      step: "Quantity",
    },
    3: {
      id: 3,
      type: "1000g",
      description:
        "Perfect for offices and events. Yields about 90 delightful cups.",
      section: "How much would you like?",
      step: "Quantity",
    },
  },
  grindOptions: {
    1: {
      id: 1,
      type: "Wholebean",
      description: "Best choice if you cherish the full sensory experience",
      section: "Want us to grind them?",
      step: "Grind Option",
    },
    2: {
      id: 2,
      type: "Filter",
      description:
        "For drip or pour-over coffee methods such as V60 or Aeropress",
      section: "Want us to grind them?",
      step: "Grind Option",
    },
    3: {
      id: 3,
      type: "Cafetiére",
      description:
        "Course ground beans specially suited for french press coffee",
      section: "Want us to grind them?",
      step: "Grind Option",
    },
  },
  deliveryOptions: {
    1: {
      id: 1,
      type: "Every week",
      description: "$7.20 per shipment. Includes free first-class shipping.",
      section: "How often should we deliver?",
      step: "Deliveries",
    },
    2: {
      id: 2,
      type: "Every 2 weeks",
      description: "$9.60 per shipment. Includes free priority shipping.",
      section: "How often should we deliver?",
      step: "Deliveries",
    },
    3: {
      id: 3,
      type: "Every month",
      description: "$12.00 per shipment. Includes free priority shipping.",
      section: "How often should we deliver?",
      step: "Deliveries",
    },
  },
}

export default coffeeSubscriptionData
