const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on ("ready", function() {
    bot.user.setGames("vavaMusique, !help");
    console.log("Le Bot est ON")
});

bot.login("NDI2MDkwMDk4OTkyMzQ5MTg0.DZT97Q.vzOT8QszQIHxCw1HPNaIHNd_hL0");
