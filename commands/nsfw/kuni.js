const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "Kuni",
        aliases: [],
        description: "placeholder",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.kuni();

        message.channel.send(hentai.url);
        return;
    }
}