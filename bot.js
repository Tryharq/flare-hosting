client.login(process.env.BOT_TOKEN);
const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find("name", "Speler");

    if (!role) return;

    member.addRole(role);
    
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === '😃welkom');

    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(new discord.RichEmbed()
        .setAuthor("Flare Hosting | Welcomer", bot.user.displayAvatarURL)
        .setColor("#E9F86C")
        .setDescription(`Welcome <@${member.user.id}> in the **Flare hosting** discord. \n\nDo you have questions about our discord bots \nor are you here for the community? \nThen you are at the right address.  \n\nDo you have questions  Contact a staff member! \nDon't forget to chose a langauge with -lang!`)
        .setThumbnail(`${member.user.displayAvatarURL}`)
        .setTimestamp(new Date())
        .setFooter("© Flare hosting all rights reserved", bot.user.displayAvatarURL ,member.user.username)
    );
});
bot.on('guildMemberRemove', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === '🙁straffen');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(new discord.RichEmbed()
        .setAuthor("flare hosting | Welcomer", bot.user.displayAvatarURL)
        .setColor("#E9F86C")
        .setDescription(`Goodbye!<@${member.user.id}> you leave **Flare hostng** discord.\nHopefully we'll see you again on our discord! `)
        .setThumbnail(`${member.user.displayAvatarURL}`)
        .setTimestamp(new Date())
        .setFooter("© Flare hosting all rights reserved", bot.user.displayAvatarURL)
        
    );
});



fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

   if(jsFiles.length <= 0) {
        console.log("Cant find files");
        return;
    }
          
    jsFiles.forEach((f,i) => { 
        var fileGet = require(`./commands/${f}`);
        console.log(`!${f} - loaded`);
        bot.commands.set(fileGet.help.name, fileGet);
    });

});
//Speelt
bot.on("ready", async () => { 

    console.log(`${bot.user.username} is online on ${bot.guilds.size} server(s) !`);

    bot.user.setActivity(`Helpen op Flare hosting!`, { type: "PLAYING"});

});



//Wanneer bot een dm krijgt
bot.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return message.channel.send("**You can't send this bot a message in private.**")
});
bot.on("message", async message => {


    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: botConfig.prefix
      };
    }

   

    var prefix = prefixes[message.guild.id].prefixes;

    //Paar ifjes voor de prefixes
    
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    
    // var prefix = botConfig.prefix; 
    // Prefix gejank

    if (!message.content.startsWith(prefix)) return;

    var messageArray = message.content.split(" ");
    
    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message ,arguments,);

    
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

