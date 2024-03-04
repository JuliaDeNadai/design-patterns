import Platform from "./Platform";

export class Facebook implements Platform{
    constructor(){
        this.configureRMTP()
        console.log("transmissáo iniciado no Facebook!")
    }

    configureRMTP(): void {
        this.authToken()
        console.log("Configurando broadcasting do Facebook...");
    }
    authToken(): void {
        console.log("Autenticando na plataforma do Facebook...");
    }
    
}