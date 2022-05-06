import fetch from "node-fetch";
const url = global.baseURL;

export class Events {
    constructor() {

    }

    getAllEvents = async (): Promise<Event[]> => {
        // @ts-ignore
        let data: Event[] = await fetch(url + "/events").then(res => res.json());

        return data;
    }

    getActiveEvents = async (): Promise<[]> => {
        let data:Event[] = await fetch(url + "/events").then(res => res.json()).catch(err => console.error(err));

        return data["active"];
    }

    getUpcomingEvents = async (): Promise<[]> => {
        let data:Event[] = await fetch(url + "/events").then(res => res.json()).catch(err => console.error(err));

        return data["upcoming"];
    }

    getEventsFromTrophyRange = async (range: "0-299" | "300-599" | "600+"): Promise<events> => {
        if (range !== "0-299" || "300-599" || "600+") throw new Error("Invalid Range. Range must be `0-299 | 300-599 | 600+`")

        let data = await fetch(url + "/events").then(res => res.json()).catch(err => console.error(err));
        return data;
    }
}

export type events = {
    active: Event[]
    upcoming: Event[]
}

export type EventBrawlerStat = {
    "name": string,
    "hash": string,
    "brawler1": number,
    "brawler2": number,
    "brawler3": number,
    "data": {
        "winRate": number,
        "useRate": number,
        "wins": number,
        "losses": number,
        "draws": number,
        "total": number
    }
}

export type EventTeamStat = {
    "name": string,
    "hash": string,
    "brawler1": number,
    "brawler2": number,
    "brawler3": number,
    "data": {
        "winRate": number,
        "useRate": number,
        "wins": number,
        "losses": number,
        "draws": number,
        "total": number
    }
}

export type Event = {
    "slot": {
        "id": number,
        "name": string,
        "hash": string,
        "listAlone": boolean,
        "hideable": boolean,
        "hideForSlot": null,
        "background": string
    },
    "startTime": string,
    "endTime": string,
    "reward": number,
    "map": {
        "id": number,
        "new": boolean,
        "disabled": boolean,
        "name": string,
        "hash": string,
        "version": number,
        "link": string,
        "imageUrl": string,
        "credit": null,
        "environment": {
            "id": number,
            "name": string,
            "hash": string,
            "path": string,
            "version": number,
            "imageUrl": string
        },
        "gameMode": {
            "id": number,
            "name": string,
            "hash": string,
            "version": number,
            "color": string,
            "link": string,
            "imageUrl": string
        },
        "lastActive": number,
        "dataUpdated": number,
        "stats": EventBrawlerStat[]
    },
    teamStats: EventTeamStat[]
    "modifier": null
}