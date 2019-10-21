const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "classic",
        aliases: [],
        description: "Boomer Porn",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.classic();

        message.channel.send(hentai.url);
        return;
    }
}