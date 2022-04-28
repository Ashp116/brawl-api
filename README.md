<p align="center">
  <img width="50%" height="50%" src="https://media.discordapp.net/attachments/683788192628867140/969077412853841970/BrawlAPI.png">
</p>

***

<div align="center">
    <p>

[![NPM](https://img.shields.io/npm/v/brawl-api)](https://npmjs.com/package/brawl-api)

</p>

</div>

----

## About
This library is wrapper is for the brawlapi.com.


### Installing

```
npm install brawl-api --save
```

Examples
---

<details><summary>Get Brawler</summary>

<h5>With cookies</h5>


```js
const {BrawlAPI} = require("brawl-api")

const Client = new BrawlAPI();

(async () => {
    let Frank = await Client.Brawlers.getBrawlerById("16000020") // Gets data for Frank
    console.log(Frank)
})()
```

</details>


