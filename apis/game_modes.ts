import fetch from "node-fetch";
const url = global.baseURL;

export class GameModes {

    getGameModes = async (): Promise<GameMode[]> => {
        let data = await fetch(url + "/gamemodes").then(res => res.json()).catch(err => console.error(err));

        return data["list"];
    }

    getGameModeById = async (id: string | Number):Promise<GameMode> => {
        let data = await fetch(url + "/gamemodes/" + id.toString()).then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data;
    }
}

export type GameMode = {
    "id": Number,
    "name": string,
    "hash": string,
    "scHash": string,
    "disabled": boolean,
    "color": string,
    "version": Number,
    "title": string,
    "tutorial": string,
    "description": string,
    "shortDescription": string,
    "sort1": Number,
    "sort2": Number,
    "link": string,
    "imageUrl": string,
    "imageUrl2": string
}