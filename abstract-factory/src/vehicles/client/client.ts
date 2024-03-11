import { Aircraft } from "../aerial/interfaces/aircraft";
import { TransportFactory } from "../factories/interfaces/transport-factory";
import { LandVehicle } from "../land/interfaces/land-vehicle";

export class Client{
    private vehicle: LandVehicle
    private aircraft: Aircraft

    constructor(factory: TransportFactory){
        this.vehicle = factory.createTransportVehicle()
        this.aircraft = factory.createTransportAircraft()
    }


    startRoute(): void {
        this.vehicle.startRoute()
        this.aircraft.startRoute()
    }
}