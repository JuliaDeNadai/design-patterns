
import { Engine } from "../../components/engine"
import { Transmission } from "../../components/transmission"
import { VehicleType } from "../../components/vehicle-type"
import { Wheel } from "../../components/wheel"
import { Vehicle } from "../../product/vehicle"

export interface Builder {
    reset(): void
    getResult(): Vehicle

    addWheel(wheel: Wheel): void
    setVehicleType(value: VehicleType): void
    setSeats(seats: number): void
    setEngine(engine: Engine): void
    setTransmission(transmission: Transmission): void
}