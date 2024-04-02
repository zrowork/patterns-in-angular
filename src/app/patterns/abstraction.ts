import { PayPalProvider, PaymentProvider } from "./bridge/implementation";

export abstract class Payment {
  protected provider: PaymentProvider;
  constructor(provider: PaymentProvider) {
    this.provider = provider;
  }

  pay() {
    this.provider.execPayment();
  }
}

export class SubscriptionPayment extends Payment {
  override pay(): void {
    super.pay();
    console.log("set new subscription");
  }
}

export class OneTimePayment extends Payment {}

export class AnnualPayment extends Payment {}
