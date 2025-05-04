import { Product } from "./Order";

class PricingCalculator {
  public calculatePriceCalculator(product: Array<Product>) {
    return product.reduce((acc, prod) => acc + prod.price, 0);
  }
}

export default PricingCalculator;
