const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "smug",
        aliases: [],
        description: "Sends the smuggiest of smugs",
        usage: "(@user)",
        category: "general"
    },
    run: async(client, message, args) => {
        let hugurl = await neko.sfw.smug();
        let huser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`hey ${huser}, ${message.author} has sent you some totally smuggular content \n${hugurl.url}`)
        } else {
            message.channel.send(`${message.author}, Here's your daily dose of smug! \n${hugurl.url}`);
        }
    }
}