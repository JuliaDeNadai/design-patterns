import { Middleware } from "./middleware"
import { Database } from "../servers/database"
import { PermissionType } from "../servers/permission-type"

export class CheckPermissionMiddleware extends Middleware {
    public check(email: string, password: string): boolean {

        const users = Database.filter(item => item.email === email)

        if(!users.length){
            console.log("email não cadastrado")
            return false
        }

        if(users[0].permission === PermissionType.ADMIN){
            console.log("O ADM ESTA ONLINE")
            return true
        }

        console.log("Bem vindo usuário")
        
        return this.checkNext(email, password)
    }

}