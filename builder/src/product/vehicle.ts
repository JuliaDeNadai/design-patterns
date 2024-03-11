import { Engine } from "../components/engine";
import { Transmission } from "../components/transmission";
import { VehicleType } from "../components/vehicle-type";
import { Wheel } from "../components/wheel";

export class Vehicle {
    private _vehicleType: VehicleType;
    private _seats: number
    private _engine: Engine
    private _wheels: Wheel[] = []
    private _transmission: Transmission

    constructor(){}

    addWheel(wheel: Wheel){
        this._wheels.push(wheel)
    }

    get wheels(): Wheel[] {
        return this._wheels
    }

    get wheelsTotal(): number {
        return this._wheels.length
    }

    get vehicleType(): VehicleType {
        return this._vehicleType
    }

    set vehicleType(vehicleType: VehicleType){
        this._vehicleType = vehicleType
    }

    get seats(): number {
        return this._seats
    }

    set seats(seats: number){
        this._seats = seats
    }

    get engine(): Engine {
        return this._engine
    }

    set engine(engine: Engine){
        this._engine = engine
    }



    get transmission(): Transmission {
        return this._transmission
    }

    set transmission(transmission: Transmission){
        this._transmission = transmission
    }
}