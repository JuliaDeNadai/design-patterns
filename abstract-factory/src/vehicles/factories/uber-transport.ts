import { Airplane } from "../aerial/airplane";
import { Aircraft } from "../aerial/interfaces/aircraft";
import { Car } from "../land/car";
import { LandVehicle } from "../land/interfaces/land-vehicle";
import { TransportFactory } from "./interfaces/transport-factory";

export class UberTranport implements TransportFactory{
    createTransportVehicle(): LandVehicle {
        return new Car()
    }
    createTransportAircraft(): Aircraft {
        return new  Airplane()
    }

}