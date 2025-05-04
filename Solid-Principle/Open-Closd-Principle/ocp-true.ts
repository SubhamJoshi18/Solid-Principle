abstract class PaymentType {
  abstract processPayment(amount: number);
}

class OnlinePayment extends PaymentType {
  processPayment(amount: number) {}
}

class CashPayment extends PaymentType {
  processPayment(amount: number) {}
}

class FundTransfer extends PaymentType {
  processPayment(amount: number) {}
}

//Using Interface

interface IPaymentProcessor {
  processPayment(amount: number): void;
}

class PaymentProcessor {
  processor: IPaymentProcessor;

  constructor(paymentProcessor: IPaymentProcessor) {
    this.processor = paymentProcessor;
  }

  processPayment(amount: number) {
    this.processor.processPayment(amount);
  }
}

class CredeitPaymentProcessor implements IPaymentProcessor {
  processPayment(amount: number): void {}
}

const creditPaymentProcessor = new CredeitPaymentProcessor();

const paymentProcessor = new PaymentProcessor(creditPaymentProcessor);
