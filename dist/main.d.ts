/// <reference types="node" file="./main.js"/>

import {Brawlers} from "../apis/brawlers"
import {ClubLogs} from "../apis/clublogs"
import {Events} from "../apis/events"
import {GameModes} from "../apis/game_modes"
import {Icons} from "../apis/icons"
import {Maps} from "../apis/maps"

export class BrawlAPI {
    Brawlers: Brawlers
    ClubLogs:ClubLogs
    Events:Events
    GameModes:GameModes
    Icons:Icons
    Maps:Maps
}