import { Token } from "../utils/token";
import { PaypalPayment } from "./paypal-payment";

export class Paypal implements PaypalPayment{
    private token: Token

    authToken(): Token {
        return new Token()
    }
    paypalPayment(): void {
        this.token = this.authToken()
        console.log(`TOKEN: ${this.token.getToken()}`)
        console.log(`Enviando pagamentos via Paypal`)
    }
    paypalReceive(): void {
        console.log(`Recebendo pagamentos via Paypal`)
    }
    
}