"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const node_fetch_1 = require("node-fetch");
const url = global.baseURL;
class Events {
    constructor() {
        this.getAllEvents = () => __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            let data = yield node_fetch_1.default(url + "/events").then(res => res.json());
            return data;
        });
        this.getActiveEvents = () => __awaiter(this, void 0, void 0, function* () {
            let data = yield node_fetch_1.default(url + "/events").then(res => res.json()).catch(err => console.error(err));
            return data["active"];
        });
        this.getUpcomingEvents = () => __awaiter(this, void 0, void 0, function* () {
            let data = yield node_fetch_1.default(url + "/events").then(res => res.json()).catch(err => console.error(err));
            return data["upcoming"];
        });
        this.getEventsFromTrophyRange = (range) => __awaiter(this, void 0, void 0, function* () {
            if (range !== "0-299" || "300-599" || "600+")
                throw new Error("Invalid Range. Range must be `0-299 | 300-599 | 600+`");
            let data = yield node_fetch_1.default(url + "/events").then(res => res.json()).catch(err => console.error(err));
            return data["upcoming"];
        });
    }
}
exports.Events = Events;
