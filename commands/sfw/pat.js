const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "pat",
        aliases: [],
        description: "Pat someone uwu~",
        usage: "(@user)",
        category: "general"
    },
    run: async(client, message, args) => {
        let hugurl = await neko.sfw.pat();
        let huser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`hey ${huser}, ${message.author} has patted you!!! \n${hugurl.url}`)
        } else {
            message.channel.send(`${message.author}, Wha?! Why are you patting ME?! >///////<`)
        }

    }
}