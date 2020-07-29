const Discord = require("discord.js");
const token = process.env.TOKEN;
const ytdl = require("ytdl-core");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on("message", async message => {
  if (message.author.bot) return;
  const serverQueue = queue.get(message.guild.id);
  if (message.content.indexOf("にんじん") != -1) {
    message.channel.send("たべたい");
    return;
  }
});

client.login(token);
