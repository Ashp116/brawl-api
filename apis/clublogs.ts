import fetch from "node-fetch";
const url = global.baseURL;

export class ClubLogs {
    getClub = async (id: string | Number):Promise<Club> => {
        let data = await fetch(url + "/clublog/" + id.toString()).then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data;
    }

}

export type Club = {
    "club": {
        "tag": string,
        "name": string,
        "trophies": Number,
        "requiredTrophies": Number,
        "memberCount": Number,
        "description": string,
        "updated": {
            "data": Number,
            "history": Number
        }
    },
    "history": [
        {
            "type": string,
            "data": {
                "joined": boolean,
                "player": {
                    "tag": string,
                    "name": string
                }
            },
            "timestamp": Number
        }
    ]
}
