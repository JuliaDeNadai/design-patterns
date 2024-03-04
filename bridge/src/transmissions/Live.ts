import Platform from "../platforms/Platform";
import { Transmission } from "./transmission";

export class Live implements Transmission {

    constructor(private plaftorm: Platform){

    }

    broadcasting(): void{
        console.log('Iniciando transmissão')
    }

    result(): void {
        console.log("ON AIR")
    }
}