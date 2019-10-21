const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "holo",
        aliases: [],
        description: "placeholder",
        usage: "(@user)",
        category: "general"
    },
    run: async(client, message, args) => {
        let hugurl = await neko.sfw.holo();
        let huser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`hey ${huser}, ${message.author} what the fuck\n${hugurl.url}`)
        } else {
            message.channel.send(`${message.author}, cuckold`)
        }

    }
}