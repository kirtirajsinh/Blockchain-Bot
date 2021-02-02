require('dotenv').config();
const api_key = process.env.API_KEY;
const Discord = require('discord.js');
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
      if(CMD_Name === "help"){
        const helpEmbed = new Discord.MessageEmbed()
        	.setColor('#f2a900')
	        .setTitle('Crypto BOT')
          .setDescription('Real time Crypto currency values')
          .addFields(
          	{ name: 'Commands :' , value: "commands to get Crypto currency info" },
            { name:"$BTC :" , value: "To get the real time value and information about Bitcoin "},
            { name:"$ETH :" , value: "To get the real time value and information about Ethereum "},
             { name:"$help :" , value: "To get help around commands"}

          )
          msg.channel.send(helpEmbed);
      }
    // if CMD_Name is  btc 
    if (CMD_Name === "BTC" /* || CMD_Name.toLowerCase() */) {
      try {
       // fetching btc api 
        const btcresponse = await fetch(btc_url);
        let btcjson = await btcresponse.json();
        console.log(btcjson)
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#f2a900')
	.setTitle('Crypto BOT')
	.setURL('https://discord.js.org/')
	.setAuthor('Crypto BOT', btcjson[0].logo_url, 'https://discord.js.org')
	.setDescription('Real time Crypto currency values')
	.setThumbnail('https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg')
	.addFields(
		{ name: 'Currency', value: btcjson[0].currency },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Price :', value: btcjson[0].price , inline: true },
		{ name: 'Market cap :', value: btcjson[0].market_cap , inline: true },
    { name: 'Rank :', value: btcjson[0].rank },
    { name: 'first Trade :', value: btcjson[0].first_trade,inline:true },
    {name:'Highest of all time :' , value : btcjson[0].high, inline: true}
	)
	.setImage('https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg')
	.setTimestamp()
	.setFooter('All Values are in USD', 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg');
        
        msg.channel.send(exampleEmbed);
          
        
        
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
         const ethEmbed = new Discord.MessageEmbed()
	.setColor('#f2a900')
	.setTitle('Crypto BOT')
	.setURL('https://discord.js.org/')
	.setAuthor('Crypto BOT', ethjson[0].logo_url, 'https://discord.js.org')
	.setDescription('Real time Crypto currency values')
	.setThumbnail('https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg')
	.addFields(
		{ name: 'Currency', value: ethjson[0].currency },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Price :', value: ethjson[0].price , inline: true },
		{ name: 'Market cap :', value: ethjson[0].market_cap , inline: true },
    { name: 'Rank :', value: ethjson[0].rank },
    { name: 'first Trade :', value: ethjson[0].first_trade,inline:true },
    {name:'Highest of all time :' , value : ethjson[0].high, inline: true}
	)
	.setImage('https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg')
	.setTimestamp()
	.setFooter('All Values are in USD', 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg');
        //sending eth response
        msg.channel.send(ethEmbed);
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





