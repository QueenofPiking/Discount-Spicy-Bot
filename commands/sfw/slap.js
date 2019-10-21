const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "slap",
        aliases: [],
        description: "Slap some bish for being stewpit!",
        usage: "(@user)",
        category: "general"
    },
    run: async(client, message, args) => {
        let hugurl = await neko.sfw.slap();
        let huser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`hey ${huser}, ${message.author} has slapped you for being a fucking idiot! \n${hugurl.url}`)
        } else {
            message.channel.send(`${message.author}, Nya!~ Harder Onii-chann!~ >/////<`)
        }

    }
}