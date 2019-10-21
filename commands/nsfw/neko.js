const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "neko",
        aliases: [],
        description: "Images of Neko doing LEWD O.O",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.neko();

        message.channel.send(hentai.url);
        return;
    }
}
