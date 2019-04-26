const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

bot.on("guildMemberAdd", member => {

    const channel = member.guild.channels.find("name", "report");
    if (!channel) console.log("Kan het kanaal niet vinden.");

    var joinEmbed = new discord.RichEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hoi ${member.user.username}, **Welkom op de server**. Hier nog meer uitleg.`)
        .setColor("#00FF00")
        .setTimestamp()
        .setFooter("Gebruiker gejoined.");

    channel.send(joinEmbed);

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
