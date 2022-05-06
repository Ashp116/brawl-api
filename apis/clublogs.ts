import {Club} from "../dist/main";
import fetch from "node-fetch";
const url = global.baseURL;

export class ClubLogs {
    getClub = async (id: string | Number):Promise<Club> => {
        let data = await fetch(url + "/clublog/" + id.toString()).then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data;
    }

}
