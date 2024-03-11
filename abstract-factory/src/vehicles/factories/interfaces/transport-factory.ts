import { Aircraft } from "../../aerial/interfaces/aircraft";
import { LandVehicle } from "../../land/interfaces/land-vehicle";

export interface TransportFactory {
    createTransportVehicle(): LandVehicle
    createTransportAircraft(): Aircraft
}