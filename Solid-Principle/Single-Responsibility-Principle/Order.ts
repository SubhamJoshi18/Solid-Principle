class Product {
  id: string;
  name: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Order {
  products: Array<Product> = [];

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(productId: string) {
    return this.products.filter((item: Product) => item.id != productId);
  }
}

export { Order, Product };
