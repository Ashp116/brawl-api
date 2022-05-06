import {BrawlMap} from "../dist/main";
import fetch from "node-fetch";
const url = global.baseURL;

export class Maps {

    getAllMaps = async (): Promise<BrawlMap[]> => {
        let data = await fetch(url + "/maps").then(res => res.json()).catch(err => console.error(err));

        return data["list"];
    }

    getMapById = async (id: string | Number):Promise<BrawlMap> => {
        let data = await fetch(url + "/maps/" + id.toString()).then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data;
    }

    getMapByTrophy = async (id: string | Number, range: "0-299" | "300-599" | "600+"):Promise<BrawlMap> => {
        if (range !== "0-299" || "300-599" || "600+") throw new Error("Invalid Range. Range must be `0-299 | 300-599 | 600+`")

        let data = await fetch(url + "/maps/" + id.toString() + "/" + range).then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data;
    }
}

