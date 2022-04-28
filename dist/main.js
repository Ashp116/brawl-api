"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrawlAPI = void 0;
global.baseURL = "https://api.brawlapi.com/v1/";
const brawlers_1 = require("./apis/brawlers");
const clublogs_1 = require("./apis/clublogs");
const events_1 = require("./apis/events");
const game_modes_1 = require("./apis/game_modes");
const icons_1 = require("./apis/icons");
const maps_1 = require("./apis/maps");
class BrawlAPI {
    constructor() {
        this.Brawlers = new brawlers_1.Brawlers();
        this.ClubLogs = new clublogs_1.ClubLogs();
        this.Events = new events_1.Events();
        this.GameModes = new game_modes_1.GameModes();
        this.Icons = new icons_1.Icons();
        this.Maps = new maps_1.Maps();
    }
}
exports.BrawlAPI = BrawlAPI;
