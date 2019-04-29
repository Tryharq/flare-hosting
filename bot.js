const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');

});
//Speelt
bot.on("ready", async () => { 

    console.log(`${bot.user.username} is online on ${bot.guilds.size} server(s) !`);

    bot.user.setActivity(`Helpen op TownHCF!`, { type: "PLAYING"});


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
