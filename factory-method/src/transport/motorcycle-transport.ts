import { Transport } from "./transport";
import { Vehicle } from "./velhices/interfaces/vehicle";
import { Motorcycle } from "./velhices/motorcycle";

export class MotorcycleTransport extends Transport {
    protected createTransport(): Vehicle {
        return new Motorcycle()
    }

}