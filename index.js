const Discord = require("discord.js");

const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("message", function(message) {
    if(message.content === "ping")
        message.reply("Pong!");
});

var http = require("http");

http.createServer(function (req, res) {
    res.write("Hello world!");
    res.end();
}).listen(process.env.PORT);