const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "kiss",
        aliases: [],
        description: "Kiss someone!",
        usage: "(@user)",
        category: "general"
    },
    run: async(client, message, args) => {
        let hugurl = await neko.sfw.kiss();
        let huser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`hey ${huser}, ${message.author} has sent you a romantic kiss! \n${hugurl.url}`)
        } else {
            message.channel.send(`${message.author}, Go fucking kiss someone you god fucking damn technosexual!`)
        }

    }
}