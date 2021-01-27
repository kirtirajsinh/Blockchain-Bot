require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();
const commands = require('./bot.js');

client.login(process.env.DISCORD_SECRET_CLIENT);


client.on('ready', messageDiscord);

function messageDiscord() {
  console.log("Hello!!");
}



client.on("message", commands)