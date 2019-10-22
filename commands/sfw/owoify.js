const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "owoify",
        aliases: [],
        description: "OwOify Something!!",
        usage: "(@user)",
        category: "general"
    },
    run: async(client, message, args) => {
        let hugurl = await neko.sfw.OwOify();
        let huser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`hey ${huser}, ${message.author} has sent you magnificent OwOs \n${hugurl.url}`)
        } else {
            message.channel.send(`${message.author}, OWO KAWAII~`)
        }

    }
}