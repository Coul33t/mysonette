const Discord = require("discord.js");
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var answers = ["OH STOP ME TAGGER LA",
               "Ehoh molo les tags là",
               "Mais ptn arrêtez de me tagger",
               "Calmez-vous sur les tags",
               "PTN STOP LES TAGS",
               "Mais wsh arrêtez de me tagger",
               "STOP LES TAGS",
               "ARRÊTEZ DE ME TAGGER",
               "Tsssss",
               "Non mais ça me fait rien fait que vous me taggiez",
               "Non mais j'm'en fous des tags",
               "Croyez pas que ça m'emmerde \:joy:"];


client.on("ready", () => {
    console.log("I am ready to tell people to fuck off!");
});

client.on("message", (message) => {
    if (message.isMentioned(client.user)) {
        rand = getRandomInt(answers.length);
        message.channel.send(answers[rand]);
    }

    console.log("I am ready!");
});

client.login("YOUR BOT TOKEN HERE");