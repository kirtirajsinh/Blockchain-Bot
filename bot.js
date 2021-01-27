require('dotenv').config();
const api_key = process.env.API_KEY;
// const api_url = `https://api.nomics.com/v1/markets?key=${api_key}`;
const btc_url = `https://api.nomics.com/v1/currencies/ticker?key=${api_key}&ids=BTC&interval=1h,1d&convert=USD&per-page=100&page=1`;
const eth_url = `https://api.nomics.com/v1/currencies/ticker?key=${api_key}&ids=ETH&interval=1h,1d&convert=USD&per-page=100&page=1`;


const PREFIX = "$";
const fetch = require('node-fetch');

const newLocal = module.exports = async (msg) => {
  if (msg.author.bot)
    return;
  if (msg.content.startsWith(PREFIX)) {
    const CMD_Name = msg.content
      .trim()
      .substring(PREFIX.length)
     
      console.log(CMD_Name);

    if (CMD_Name === "btc" && CMD_Name.toUpperCase()) {
      try {
        
        const response = await fetch(btc_url);
        let json = await response.json();
        console.log(json)
        msg.channel.send(json)
        
      }
      catch (err) {
        console.error(err);
        msg.channel.send("You have entered a wrong command");
      }
      

    }
      else if(CMD_Name === "eth" || CMD_Name.toUpperCase()) {
      try {
        const response = await fetch(eth_url);
        let json = await response.json();
        console.log(json)
        msg.channel.send(json)
      }
      catch (err) {
        console.error(err);
        msg.channel.send("You have entered a wrong command");
      }
    }







  }
}



