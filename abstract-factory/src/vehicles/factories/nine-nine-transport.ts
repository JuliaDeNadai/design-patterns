import { Airplane } from "../aerial/airplane";
import { Helicopter } from "../aerial/helicopter";
import { Aircraft } from "../aerial/interfaces/aircraft";
import { LandVehicle } from "../land/interfaces/land-vehicle";
import { Motorcycle } from "../land/motorcycle";
import { TransportFactory } from "./interfaces/transport-factory";

export class NineNineTransport implements TransportFactory {
    createTransportVehicle(): LandVehicle {
        return new Motorcycle()
    }
    createTransportAircraft(): Aircraft {
        return new Helicopter()
    }
    
}