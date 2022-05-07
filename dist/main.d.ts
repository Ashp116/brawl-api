/// <reference types="node" file="./main.js"/>

/**
 *          TYPES
 * */
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
export type Club = {
    club: {
        tag: string,
        name: string,
        trophies: Number,
        requiredTrophies: Number,
        memberCount: Number,
        description: string,
        updated: {
            data: Number,
            history: Number
        }
    },
    history: [
        {
            type: string,
            data: {
                joined: boolean,
                player: {
                    tag: string,
                    name: string
                }
            },
            timestamp: Number
        }
    ]
}
export type BrawnEvents = {
    active: BrawnEvent[]
    upcoming: BrawnEvent[]
}
export type BrawnEventStat = {
    name: string,
    hash: string,
    brawler1: number,
    brawler2: number,
    brawler3: number,
    data: {
        winRate: number,
        useRate: number,
        wins: number,
        losses: number,
        draws: number,
        total: number
    }
}
export type BrawnEventTeamStat = {
    name: string,
    hash: string,
    brawler1: number,
    brawler2: number,
    brawler3: number,
    data: {
        winRate: number,
        useRate: number,
        wins: number,
        losses: number,
        draws: number,
        total: number
    }
}
export type BrawnEvent = {
    slot: {
        id: number,
        name: string,
        hash: string,
        listAlone: boolean,
        hideable: boolean,
        hideForSlot: null,
        background: string
    },
    startTime: string,
    endTime: string,
    reward: number,
    map: {
        id: number,
        new: boolean,
        disabled: boolean,
        name: string,
        hash: string,
        version: number,
        link: string,
        imageUrl: string,
        credit: null,
        environment: {
            id: number,
            name: string,
            hash: string,
            path: string,
            version: number,
            imageUrl: string
        },
        gameMode: {
            id: number,
            name: string,
            hash: string,
            version: number,
            color: string,
            link: string,
            imageUrl: string
        },
        lastActive: number,
        dataUpdated: number,
        stats: BrawnEventStat[]
    },
    teamStats: BrawnEventTeamStat[]
    modifier: null
}
export type GameMode = {
    id: Number,
    name: string,
    hash: string,
    scHash: string,
    disabled: boolean,
    color: string,
    version: Number,
    title: string,
    tutorial: string,
    description: string,
    shortDescription: string,
    sort1: Number,
    sort2: Number,
    link: string,
    imageUrl: string,
    imageUrl2: string
}
export type IconsResponse = {
    player: Icon[]
    club: Icon[]
}
export type Icon = {
    id: Number,
    imageUrl: string,
    imageUrl2: string
    brawler: Number | null
}
export type BrawlMap = {
    id: Number,
    new: boolean,
    disabled: boolean,
    name: string,
    hash: string,
    version: Number,
    link: string,
    imageUrl: string,
    credit: null,
    environment: {
        id: Number,
        name: string,
        hash: string,
        path: string,
        version: Number,
        imageUrl: string
    },
    gameMode: {
        id: 1,
        name: string,
        hash: string,
        version: Number,
        color: string,
        link: string,
        imageUrl: string
    },
    lastActive: Number,
    dataUpdated: null,
    stats: [],
    teamStats: []
}
/**
 *          CLASSES
 * */
export class Brawlers {
    public getAllBrawlers(): Promise<Brawler[]>
    getBrawlerById(id: string | Number):Promise<Brawler>
}
export class ClubLogs {
    getClub(id: string | Number):Promise<Club>
}
export class Events {
    getAllEvents(): Promise<BrawnEvents[]>
    getActiveEvents(): Promise<BrawnEvent[]>
    getUpcomingEvents(): Promise<BrawnEvent[]>
    getEventsFromTrophyRange(range: "0-299" | "300-599" | "600+"): Promise<BrawnEvents[]>
}
export class GameModes {
    getGameModes(): Promise<GameMode[]>
    getGameModeById(id: string | Number):Promise<GameMode>
}

export class Icons {
    getAllIcons(): Promise<IconsResponse>
    getPlayerIcons():Promise<Icon[]>
    getClubIcons():Promise<Icon[]>
    getPlayerIconsById (id: string | Number):Promise<Icon>
    getClubIconsById(id: string | Number):Promise<Icon>
}
export class Maps {
    getAllMaps(): Promise<BrawlMap[]>
    getMapById(id: string | Number):Promise<BrawlMap>
    getMapByTrophy(id: string | Number, range: "0-299" | "300-599" | "600+"):Promise<BrawlMap>
}




/**
 *          MAIN EXPORT
 * */
export class BrawlAPI {
    Brawlers: Brawlers
    ClubLogs: ClubLogs
    Events:Events
    GameModes:GameModes
    Icons:Icons
    Maps:Maps
}


