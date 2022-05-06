import {GameMode} from "../dist/main";
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

