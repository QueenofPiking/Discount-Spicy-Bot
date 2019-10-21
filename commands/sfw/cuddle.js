const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "cuddle",
        aliases: [],
        description: "Cuddle someone to death!",
        usage: "(@user)",
        category: "general"
    },
    run: async(client, message, args) => {
        let hugurl = await neko.sfw.hug();
        let huser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`hey ${huser}, ${message.author} has sent you lewd cuddles~ \n${hugurl.url}`)
        } else {
            message.channel.send(`${message.author}, RAPE RAPE RAPE RAPE RAPE RAPE RAPE RAPE RAPE RAPE RAPE I DID NOT CONSENT RAPE!`)
        }

    }
}