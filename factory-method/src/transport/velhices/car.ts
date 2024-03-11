import { Vehicle } from "./interfaces/vehicle";

export class Car implements Vehicle {
    startRoute(): void {

        this.getCargo()
        console.log(`Iniciando trajeto...`)
    }
    getCargo(): void {
        console.log(`Pegamos os pasageiros, vamos!`)
    }
    
}