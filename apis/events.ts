import {BrawnEvents, BrawnEvent} from "../dist/main";
import fetch from "node-fetch";
const url = global.baseURL;

export class Events {
    getAllEvents = async (): Promise<BrawnEvents[]> => {
        // @ts-ignore
        let data: BrawnEvents[] = await fetch(url + "/events).then(res => res.json()");

        return data;
    }

    getActiveEvents = async (): Promise<BrawnEvent[]> => {
        let data:BrawnEvent[] = await fetch(url + "/events").then(res => res.json()).catch(err => console.error(err));

        return data["active"];
    }

    getUpcomingEvents = async (): Promise<BrawnEvent[]> => {
        let data:BrawnEvent[] = await fetch(url + "/events").then(res => res.json()).catch(err => console.error(err));

        return data["upcoming"];
    }

    getEventsFromTrophyRange = async (range: "0-299" | "300-599" | "600+"): Promise<BrawnEvents[]> => {
        if (range !== "0-299" || "300-599" || "600+") throw new Error("Invalid Range. Range must be `0-299 | 300-599 | 600+`")

        let data:BrawnEvents[] = await fetch(url + "/events").then(res => res.json()).catch(err => console.error(err));
        return data;
    }
}
