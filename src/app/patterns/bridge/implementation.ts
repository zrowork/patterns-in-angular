export interface PaymentProvider {
  execPayment(): void;
}

export class PayPalProvider implements PaymentProvider {
  execPayment() {
    console.log("call paypal api");
  }
}

export class ApplePayProvider implements PaymentProvider {
  execPayment() {
    console.log("call paypal api");
  }
}
