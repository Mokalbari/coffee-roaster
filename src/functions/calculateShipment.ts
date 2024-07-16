import setPriceRange from "./setPriceRange"

const calculateShipment = (quantity: string, deliveryOption: string) => {
  const currentPriceRange = setPriceRange(quantity)

  switch (deliveryOption) {
    case "Every week":
      return currentPriceRange.weekly * 4
    case "Every 2 weeks":
      return currentPriceRange.biMonthly * 2
    case "Every month":
      return currentPriceRange.monthly
    default:
      return 0
  }
}

export default calculateShipment
