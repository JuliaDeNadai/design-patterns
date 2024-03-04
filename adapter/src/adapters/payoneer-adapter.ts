import { Payoneer } from "../payoneer/payoneer";
import { PaypalPayment } from "../paypal/paypal-payment";
import { Token } from "../utils/token";

export class PayoneerAdapter implements PaypalPayment{
    private token: Token

    constructor(private payoneer: Payoneer){
        console.log("Adaptando o Payoneer para o Paypal")
    }

    authToken(): Token {
        return new Token()
    }

    paypalPayment(): void {
        return this.payoneer.sendPayment()
    }

    paypalReceive(): void {
        return this.payoneer.receivePayment()
    }

}