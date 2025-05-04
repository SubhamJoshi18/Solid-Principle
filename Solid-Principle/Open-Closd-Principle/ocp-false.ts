class PaymentProcessors {
  processPayment(amount: number, paymentType: string) {
    switch (paymentType) {
      case "Online": {
        console.log(
          `Payment has been Done Using  :${paymentType}, Amount : ${amount}`
        );
        break;
      }

      case "Cash": {
        console.log(
          `Payment has been Done Using  :${paymentType}, Amount : ${amount}`
        );
        break;
      }

      case "Fund Transfer": {
        console.log(
          `Payment has been Done Using  :${paymentType}, Amount : ${amount}`
        );
        break;
      }
    }
  }
}
