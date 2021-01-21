require('dotenv').config();
const api_key = process.env.API_KEY;
const api_url = `https://api.nomics.com/v1/currencies/ticker?key=${api_key}`;
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
        
        if (CMD_Name === 'btc' || CMD_Name.toUpperCase()) {
         try {
                const response = await fetch(api_url);
                let json = await response.json();
                console.log(json[0].price);
                msg.channel.send(json[0].price);
                msg.channel.send(json[0].logo_url)


            }
            catch (err) {
                console.error(err);
                msg.channel.send("You have entered a wrong command");
            }





        }
    }


    
};