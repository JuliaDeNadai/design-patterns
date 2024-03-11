import { VehicleBuilder } from "./builders/vehicle-builder";
import { Director } from "./director/director";
import { Vehicle } from "./product/vehicle";

const builder: VehicleBuilder = new VehicleBuilder()

const director: Director = new Director(builder)


director.constructSedanCar()

const sedan: Vehicle = builder.getResult()

console.log(`Criado um veículo do tipo ${sedan.vehicleType} com ${sedan.wheelsTotal} rodas` ) 


director.constructTruck()

const truck: Vehicle = builder.getResult()

console.log(`Criado um veículo do tipo ${truck.vehicleType} com ${truck.seats} bancos` ) 