import { PayoneerAdapter } from "./adapters/payoneer-adapter";
import { Payoneer } from "./payoneer/payoneer";
import { PayoneerPayment } from "./payoneer/payoneer-payment";
import { Paypal } from "./paypal/paypal";
import { PaypalPayment } from "./paypal/paypal-payment";

const payment: PaypalPayment = new Paypal()
payment.paypalPayment()
payment.paypalReceive()


const payment_payment: PayoneerPayment = new Payoneer()
payment_payment.receivePayment()
payment_payment.sendPayment()

const payment_adapted: PaypalPayment = new PayoneerAdapter(new Payoneer())
payment_adapted.paypalPayment()
payment_adapted.paypalReceive()