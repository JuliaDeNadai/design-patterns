import Platform from "./platforms/Platform";
import { Twitch } from "./platforms/Twitch";
import { Youtube } from "./platforms/Youtube";
import { Facebook } from "./platforms/fabebook";
import { Live } from "./transmissions/Live";
import { AdvancedLive } from "./transmissions/advanced-live";

function startLive(platform: Platform){
    console.log('iniciando....')

    const live = new Live(platform)

    live.broadcasting()
    live.result()
}

function startAdvancedLive(platform: Platform){
    const live = new AdvancedLive(platform)

    live.broadcasting()
    live.result()
    live.comments()
    live.subtitles()
}

startLive(new Youtube())

startAdvancedLive(new Twitch())
startAdvancedLive(new Facebook())