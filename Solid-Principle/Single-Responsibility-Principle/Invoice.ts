import { Product } from "./Order";
import PricingCalculator from "./PriceCalculator";

class InvoiceDepartment {
  getProductInvoice(product: Product[], priceGenerator: PricingCalculator) {
    product.forEach((prod) => {
      console.log(`Product Name : ${prod.name}`);
    });

    console.log(
      `Total Invoice Product : ${priceGenerator.calculatePriceCalculator(
        product
      )}`
    );
  }
}

export default InvoiceDepartment;
