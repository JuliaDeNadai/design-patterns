import { Aircraft } from "./interfaces/aircraft";

export class Helicopter implements Aircraft {
    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log(`Iniciando decolagem...`)
    }
    getCargo(): void {
        console.log(`Passageiros ok, ligando hélices`)
    }
    checkWind(): void {
        console.log(`ventos a 25km, Sudeste, ok`)
    }
    
}