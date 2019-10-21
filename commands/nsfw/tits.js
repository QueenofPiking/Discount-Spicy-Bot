const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "tits",
        aliases: [],
        description: "Big ol'e Bewbs!!~",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.tits();

        message.channel.send(hentai.url);
        return;
    }
}