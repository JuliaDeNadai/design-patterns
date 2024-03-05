import * as chalk from "chalk"
import { Middleware } from "./middleware"
import { Database } from "../servers/database"

export class CheckUserMiddleware extends Middleware {
    public check(email: string, password: string): boolean {

        if(email.indexOf("@") === -1){
            console.log("email inválido")
            return false
        }

        if(!Database.filter(item => item.email === email && item.password === password).length){
            console.log("Email oui senha inválidos")
            return false
        }

        return this.checkNext(email, password)
    }

}