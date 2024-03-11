import { Vehicle } from "./velhices/interfaces/vehicle";

export abstract class Transport {
    startTransport(): void {
        const vehicle = this.createTransport()

        vehicle.startRoute()

    }

    protected abstract createTransport(): Vehicle
}