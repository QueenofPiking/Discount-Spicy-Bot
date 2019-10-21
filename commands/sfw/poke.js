const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "Poke",
        aliases: [],
        description: "Poke someone uwu~",
        usage: "(@user)",
        category: "general"
    },
    run: async(client, message, args) => {
        let hugurl = await neko.sfw.poke();
        let huser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`hey ${huser}, ${message.author} has poked you OwO \n${hugurl.url}`)
        } else {
            message.channel.send(`${message.author}, WHY DID YOU FUCKING POKE ME YOU NI||CE GUY||`)
        }

    }
}