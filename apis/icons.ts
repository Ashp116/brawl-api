import fetch from "node-fetch";
const url = global.baseURL;

export class Icons {

    getAllIcons = async (): Promise<IconsResponse> => {
        let data = await fetch(url + "/icons").then(res => res.json()).catch(err => console.error(err));

        return data;
    }

    getPlayerIcons = async ():Promise<[]> => {
        let data = await fetch(url + "/icons").then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data["player"];
    }

    getClubIcons = async ():Promise<[]> => {
        let data = await fetch(url + "/icons").then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data["club"];
    }

    getPlayerIconsById = async (id: string | Number):Promise<Icon> => {
        let data = await fetch(url + "/icons/").then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data["player"][id.toString()];
    }

    getClubIconsById = async (id: string | Number):Promise<Icon> => {
        let data = await fetch(url + "/icons/").then(res => res.json()).catch(err => console.error(err));
        // @ts-ignore
        return data["club"][id.toString()];
    }

}

export type IconsResponse = {
    player: []
    club: []
}

export type Icon = {
    id: Number,
    imageUrl: string,
    imageUrl2: string
    brawler: Number | null
}