const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "hug",
        aliases: [],
        description: "Hug someone!",
        usage: "(@user)",
        category: "general"
    },
    run: async(client, message, args) => {
        let hugurl = await neko.sfw.hug();
        let huser = message.guild.member(message.mentions.users.first() ||  message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`hey ${huser}, ${message.author} has sent you a hug! \n${hugurl.url}`)
        } else {
            message.channel.send(`${message.author}, Go hug someone else you lonely fucking incel! I'm just some underpaid AI!`)
        }

    }
}