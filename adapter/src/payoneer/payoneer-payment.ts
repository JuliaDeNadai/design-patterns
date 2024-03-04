import { Token } from "../utils/token";

export interface PayoneerPayment {
    authToken(): Token
    sendPayment(): void
    receivePayment(): void
}