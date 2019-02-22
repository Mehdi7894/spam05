const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548461061913968640")
setInterval(function() {
channel.send(`لاالله الى الله محمد رسول الله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
