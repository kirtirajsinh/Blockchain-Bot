require('dotenv').config();
const api_key = process.env.API_KEY;
// URL for Bitcoin API
const btc_url = `https://api.nomics.com/v1/currencies/ticker?key=${api_key}&ids=BTC&interval=1h,1d&convert=USD&per-page=100&page=1`;
// URL for etherium URL
const eth_url = `https://api.nomics.com/v1/currencies/ticker?key=${api_key}&ids=ETH&interval=1h,1d&convert=USD&per-page=100&page=1`;


const PREFIX = "$";
const fetch = require('node-fetch');

const btc = module.exports = async (msg) => {
  // if the sender is bot it'll return
  if (msg.author.bot)
    return;
    // command should start with $ as a Prefix
  if (msg.content.startsWith(PREFIX)) {
    const CMD_Name = msg.content
      .trim()
      .substring(PREFIX.length)
     
      console.log(CMD_Name);
    // if CMD_Name is  btc 
    if (CMD_Name === "BTC" /* || CMD_Name.toLowerCase() */) {
      try {
       // fetching btc api 
        const btcresponse = await fetch(btc_url);
        let btcjson = await btcresponse.json();
        console.log(btcjson)
        //sending response to the user
        msg.channel.send(response);
        
      }
      //if ther's some error 
      catch (err) {
        console.error(err);
        msg.channel.send("You have entered a wrong command");
      }
    }
    // if command is eth
    if (CMD_Name === "ETH" /* || CMD_Name.toLowerCase() */){
      try{
        const ethresponse = await fetch(eth_url);
        const ethjson = await ethresponse.json();
        console.log(ethjson);
        //sending eth response
        msg.channel.send(response);
      }
      catch (err){
        console.error(err);
        msg.channel.send("You have entered a wrong command");
      }

    }
  }
  else{
    console.log(msg.content)
    
  }
}
// const response = {
//           id:this.id,
//           currency:this.currency
//         }




