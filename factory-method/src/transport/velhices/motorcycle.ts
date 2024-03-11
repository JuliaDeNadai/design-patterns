import { Vehicle } from "./interfaces/vehicle";

export class Motorcycle implements Vehicle {
    startRoute(): void {
        this.getCargo()
        console.log(`Iniciando entrega...`)
    }
    getCargo(): void {
        console.log(`Ja pegamos a encomenda, vamos!`)
    }
    
}