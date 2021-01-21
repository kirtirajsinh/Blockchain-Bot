require('dotenv').config();
const {Client} = require('discord.js');
const client = new Client();

client.login(process.env.DISCORD_SECRET_CLIENT);


client.on('ready',messageDiscord);

function messageDiscord(){
    console.log("Hello!!");
}

const commands = require('./bot.js');

client.on("message",commands)