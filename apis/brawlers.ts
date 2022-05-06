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

export type Brawler = {
    "id": Number,
    "avatarId": Number,
    "name": string,
    "hash": string,
    "path": string,
    "released": boolean,
    "version": Number,
    "link": string,
    "imageUrl": string,
    "imageUrl2": string,
    "imageUrl3": string,
    "class": {
        "id": Number,
        "name": string
    },
    "rarity": {
        "id": Number,
        "name": string,
        "color": string
    },
    "unlock": null,
    "description": string,
    "starPowers": [
        {
            "id": Number,
            "name": string,
            "path": string,
            "version": Number,
            "description": string,
            "imageUrl": string,
            "released": boolean
        },
        {
            "id": Number,
            "name": string,
            "path": string,
            "version": Number,
            "description": string,
            "imageUrl": string,
            "released": boolean
        }
    ],
    "gadgets": [
        {
            "id": Number,
            "name": string,
            "path": string,
            "version": Number,
            "description": string,
            "imageUrl": string,
            "released": boolean
        },
        {
            "id": Number,
            "name": string,
            "path": string,
            "version": Number,
            "description": string,
            "imageUrl": string,
            "released": boolean
        }
    ],
    "videos": [
        {
            "type": Number,
            "name": string,
            "description": string,
            "duration": string,
            "videoUrl": string,
            "previewUrl": string,
            "uploadDate": string
        },
        {
            "type": Number,
            "name": string,
            "description": string,
            "duration": string,
            "videoUrl": string,
            "previewUrl": string,
            "uploadDate": string
        }
    ]
}