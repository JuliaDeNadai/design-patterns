import Platform from "./Platform";

export class Youtube implements Platform {
    constructor(){
        this.configureRMTP()
        console.log("transmissáo iniciado no Youtube!")
    }

    configureRMTP(): void {
        this.authToken()
        console.log("Configurando broadcasting do Youtube...");
    }
    authToken(): void {
        console.log("Autenticando na plataforma do Youtube...");
    }

}