import { Transport } from "./transport";
import { Car } from "./velhices/car";
import { Vehicle } from "./velhices/interfaces/vehicle";

export class CarTransport extends Transport {
    protected createTransport(): Vehicle {
        return new Car()
    }

}