import { Client } from "./vehicles/client/client";
import company from "./vehicles/consts/company";
import { TransportFactory } from "./vehicles/factories/interfaces/transport-factory";
import { NineNineTransport } from "./vehicles/factories/nine-nine-transport";
import { UberTranport } from "./vehicles/factories/uber-transport";

const currentCompany = company.NINENINE
let factory: TransportFactory

switch(currentCompany) {
    case company.UBER:
        factory = new UberTranport()
        break

    case company.NINENINE:
        factory = new NineNineTransport()
        break
    
    default:
        console.error("Desconhecido")

}

if(factory){

    const client = new Client(factory)
    
    client.startRoute()
}


