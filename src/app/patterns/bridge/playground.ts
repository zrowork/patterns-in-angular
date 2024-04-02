import { OneTimePayment, Payment, SubscriptionPayment } from "../abstraction";
import { ApplePayProvider, PayPalProvider } from "./implementation";

const payPalSubscriptionPayment = new SubscriptionPayment(new PayPalProvider());
const applePayOneTimePayment = new OneTimePayment(new ApplePayProvider());
payPalSubscriptionPayment.pay();
applePayOneTimePayment.pay();
