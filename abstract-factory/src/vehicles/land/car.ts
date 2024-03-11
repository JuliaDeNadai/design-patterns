import { LandVehicle } from "./interfaces/land-vehicle";

export class Car implements LandVehicle {
    startRoute(): void {
        this.getCargo()
        console.log(`Iniciando trajeto...`)
    }
    getCargo(): void {
        console.log(`Passageiros a bordo, vamos!`)
    }
    
}
