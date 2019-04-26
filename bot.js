const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
