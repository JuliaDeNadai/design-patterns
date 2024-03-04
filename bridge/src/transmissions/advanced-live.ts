import Platform from "../platforms/Platform";
import { Live } from "./Live";

export class AdvancedLive extends Live {

    constructor(platform: Platform){
        super(platform);
    }

    subtitles(): void {
        console.log('Legendas ativadas')
    }

    comments(): void {
        console.log('comentários ativados')
    }
}