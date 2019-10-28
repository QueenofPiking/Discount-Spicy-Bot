const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "futanari",
        aliases: [],
        description: "Futa Galore!",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.futanari();

        message.channel.send(hentai.url);
        return;
    }
}