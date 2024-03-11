import { LandVehicle } from "./interfaces/land-vehicle";

export class Motorcycle implements LandVehicle {
    startRoute(): void {
        this.getCargo()
        console.log(`Iniciando trajeto...`)
    }
    getCargo(): void {
        console.log(`Já pegamos a encomenda`)
    }
    
}