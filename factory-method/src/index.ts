import { CarTransport } from "./transport/car-transport"
import { MotorcycleTransport } from "./transport/motorcycle-transport"
import { Transport } from "./transport/transport"

// npm run factory -- <argument>
declare var process: any

let transport: Transport

if(!process.argv.includes("--uber") && !process.argv.includes("--log")) console.log("Selecione o tipo de entrega")
if(process.argv.includes("--uber")) transport = new CarTransport()
if(process.argv.includes("--log")) transport = new MotorcycleTransport()

if(transport) transport.startTransport()