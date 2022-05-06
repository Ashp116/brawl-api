const {BrawlAPI, Brawlers} = require("brawl-api")

const Client = new BrawlAPI();

Client.Brawlers.getBrawlerById("16000020").then(r => console.log(r)) // Gets data for Frank
Client.Brawlers.getAllBrawlers().then(r => console.log(r)) // Gets All Brawlers Data
