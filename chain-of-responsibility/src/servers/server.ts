import { Middleware } from "../middlewares/middleware";

export class Server {
    private middleware: Middleware

    public setMiddleware(middleware: Middleware): void{
        this.middleware = middleware
    }

    logIn(email: string, password: string): boolean {
        if(this.middleware.check(email, password)){
            console.log("Usuário autenticado!")
            return true
        }

        return false
    }
}