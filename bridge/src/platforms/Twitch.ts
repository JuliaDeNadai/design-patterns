import Platform from "./Platform";

export class Twitch implements Platform {
    constructor(){
        this.configureRMTP()
        console.log("transmissáo iniciado na Twitch!")
    }

    configureRMTP(): void {
        this.authToken()
        console.log("Configurando broadcasting da Twitch...");
    }
    
    authToken(): void {
        console.log("Autenticando na plataforma da Twitch...");
    }

}