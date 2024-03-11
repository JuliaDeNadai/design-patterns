import { Aircraft } from "./interfaces/aircraft";

export class Airplane implements Aircraft {
    startRoute(): void {
        this.checkWind()
        this.getCargo()

        console.log(`Iniciando decolagem...`)
    }
    getCargo(): void {
        console.log(`Pegamos os passageiros, vamos!`)
    }
    checkWind(): void {
        console.log(`Ventos a 25km, ventos ok!`)
    }
    
}