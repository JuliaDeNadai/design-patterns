import { Token } from "../utils/token";
import { PayoneerPayment } from "./payoneer-payment";

export class Payoneer implements PayoneerPayment{
    private token: Token

    authToken(): Token {
        return new Token()
    }

    sendPayment(): void {
        this.token = this.authToken()
        console.log(`TOKEN: ${this.token.getToken()}`)
        console.log(`Enviando pagamentos via Payoneer`)
    }
    receivePayment(): void {
        console.log(`Recebendo pagamentos via Payoneer`)
    }
    
}