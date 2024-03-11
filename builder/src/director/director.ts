import { Builder } from "../builders/interfaces/builder";
import { Engine } from "../components/engine";
import { Transmission } from "../components/transmission";
import { VehicleType } from "../components/vehicle-type";
import { Wheel } from "../components/wheel";

export class Director {
    constructor(private builder: Builder){}

    constructSedanCar(){
        this.builder.setVehicleType(VehicleType.SEDAN)
        this.builder.setSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(1600))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
    }

    constructTruck(){
        this.builder.setVehicleType(VehicleType.TRUCK)
        this.builder.setSeats(3)
        this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL)
        this.builder.setEngine(new Engine(13000))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
    }
}