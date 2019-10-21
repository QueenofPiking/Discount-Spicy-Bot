const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "boobs",
        aliases: [],
        description: "Tig ol Bitties",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.boobs();

        message.channel.send(hentai.url);
        return;
    }
}