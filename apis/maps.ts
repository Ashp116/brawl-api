import fetch from "node-fetch";
const url = global.baseURL;

export class Maps {

    getAllMaps = async (): Promise<Map[]> => {
        let data = await fetch(url + "/maps").then(res => res.json()).catch(err => console.error(err));

        return data["list"];
    }

    getMapById = async (id: string | Number):Promise<Map> => {
        let data = await fetch(url + "/maps/" + id.toString()).then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data;
    }

    getMapByTrophy = async (id: string | Number, range: "0-299" | "300-599" | "600+"):Promise<Map> => {
        if (range !== "0-299" || "300-599" || "600+") throw new Error("Invalid Range. Range must be `0-299 | 300-599 | 600+`")

        let data = await fetch(url + "/maps/" + id.toString() + "/" + range).then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data;
    }
}

export type Map = {
    "id": Number,
    "new": boolean,
    "disabled": boolean,
    "name": string,
    "hash": string,
    "version": Number,
    "link": string,
    "imageUrl": string,
    "credit": null,
    "environment": {
        "id": Number,
        "name": string,
        "hash": string,
        "path": string,
        "version": Number,
        "imageUrl": string
    },
    "gameMode": {
        "id": 1,
        "name": string,
        "hash": string,
        "version": Number,
        "color": string,
        "link": string,
        "imageUrl": string
    },
    "lastActive": Number,
    "dataUpdated": null,
    "stats": [],
    "teamStats": []
}