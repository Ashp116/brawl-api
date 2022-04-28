import fetch from "node-fetch";
const url = global.baseURL;

export class Events {
    constructor() {

    }

    getAllEvents = async (): Promise<events> => {
        // @ts-ignore
        let data: events = await fetch(url + "/events").then(res => res.json());

        return data;
    }

    getActiveEvents = async (): Promise<[]> => {
        let data = await fetch(url + "/events").then(res => res.json()).catch(err => console.error(err));

        return data["active"];
    }

    getUpcomingEvents = async (): Promise<[]> => {
        let data = await fetch(url + "/events").then(res => res.json()).catch(err => console.error(err));

        return data["upcoming"];
    }

    getEventsFromTrophyRange = async (range: "0-299" | "300-599" | "600+"): Promise<events> => {
        if (range !== "0-299" || "300-599" || "600+") throw new Error("Invalid Range. Range must be `0-299 | 300-599 | 600+`")

        let data = await fetch(url + "/events").then(res => res.json()).catch(err => console.error(err));
        return data["upcoming"];
    }
}

export type events = {
    active: []
    upcoming: []
}