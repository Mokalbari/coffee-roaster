import priceRange from "../lib/priceRange"

export const setPriceRange = (quantity: string) => {
  switch (quantity) {
    case "250g":
      return priceRange[0]
    case "500g":
      return priceRange[1]
    case "1000g":
      return priceRange[2]
    default:
      return priceRange[0]
  }
}

export default setPriceRange
