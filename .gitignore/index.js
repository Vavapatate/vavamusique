const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on ("ready", function() {
    bot.user.setGames("vavaMusique, !help");
    console.log("Le Bot est ON")
})

bot.on("message", message => {
    if(message.content === "!ping"){
 message.reply("Pong! Lel")
}
})

bot.login("NDI2MDkwMDk4OTkyMzQ5MTg0.DZVxnw.ZcrMNkdeqyCKpNMG4N8ZSlpSf14")
