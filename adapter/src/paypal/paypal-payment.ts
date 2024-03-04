import { Token } from "../utils/token";

export interface PaypalPayment{
    authToken(): Token
    paypalPayment(): void
    paypalReceive(): void
}