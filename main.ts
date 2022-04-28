import fetch from "node-fetch";
global.baseURL = "https://api.brawlapi.com/v1/"

import {Brawlers} from "./apis/brawlers"
import {ClubLogs} from "./apis/clublogs"
import {Events} from "./apis/events"
import {GameModes} from "./apis/game_modes"
import {Icons} from "./apis/icons"
import {Maps} from "./apis/maps"

export class BrawlAPI {
    Brawlers = new Brawlers();
    ClubLogs = new ClubLogs();
    Events = new Events();
    GameModes = new GameModes();
    Icons = new Icons();
    Maps = new Maps();
}



