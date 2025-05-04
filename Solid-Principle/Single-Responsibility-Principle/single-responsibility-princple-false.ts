import InvoiceDepartment from "./Invoice";
import { Order, Product } from "./Order";
import PaymentProcessor from "./Payment";
import PricingCalculator from "./PriceCalculator";

const macbook1 = new Product("1", "Macbook M3 Pro", 2000);
const macbook2 = new Product("2", "Macbook M2 Pro", 1000);

const order = new Order();

order.addProduct(macbook1);
order.addProduct(macbook2);

const priceGenerator = new PricingCalculator();
const invoiceGenerator = new InvoiceDepartment();
const paymentProcessor = new PaymentProcessor();

const priceResult = priceGenerator.calculatePriceCalculator(
  order.getProducts()
);

const invoiceResult = invoiceGenerator.getProductInvoice(
  order.getProducts(),
  priceGenerator
);

const paymentResult = paymentProcessor.processPayment();

(() => {
  console.log(`

        Price Result is : ${priceResult}

        Invoice Result is : ${invoiceResult}

        Payment Result is  : ${paymentResult}

        `);
})();
