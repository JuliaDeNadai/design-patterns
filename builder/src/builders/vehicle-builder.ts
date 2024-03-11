import { Engine } from "../components/engine";
import { Transmission } from "../components/transmission";
import { VehicleType } from "../components/vehicle-type";
import { Wheel } from "../components/wheel";
import { Vehicle } from "../product/vehicle";
import { Builder } from "./interfaces/builder";

export class VehicleBuilder implements Builder {
    private vehicle = new Vehicle()

    reset(): void {
        this.vehicle = new Vehicle()
    }
    getResult(): Vehicle {
        const result: Vehicle = this.vehicle
        this.reset()
        return result
    }
    addWheel(wheel: Wheel): void {
        this.vehicle.addWheel(wheel)
    }
    setVehicleType(value: VehicleType): void {
        this.vehicle.vehicleType = value
    }
    setSeats(seats: number): void {
        this.vehicle.seats = seats
    }
    setEngine(engine: Engine): void {
        this.vehicle.engine = engine
    }
    setTransmission(transmission: Transmission): void {
        this.vehicle.transmission = transmission
    }
    
}