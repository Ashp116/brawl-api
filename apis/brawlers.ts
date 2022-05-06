import {Brawler} from "../dist/main";
import fetch from "node-fetch";
const url = global.baseURL;

export class Brawlers {

    getAllBrawlers = async (): Promise<Brawler[]> => {
        let data = await fetch(url + "/brawlers").then(res => res.json()).catch(err => console.error(err));

        return data["list"];
    }

    getBrawlerById = async (id: string | Number):Promise<Brawler> => {
        let data = await fetch(url + "/brawlers/" + id.toString()).then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data;
    }

}