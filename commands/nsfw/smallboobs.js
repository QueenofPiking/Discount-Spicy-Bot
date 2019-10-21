const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "smallboobs",
        aliases: [],
        description: "Cultured man's breasts",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.smallBoobs();

        message.channel.send(hentai.url);
        return;
    }
}