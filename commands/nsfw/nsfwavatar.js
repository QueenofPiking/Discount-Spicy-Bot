const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "nsfwavatar",
        aliases: [],
        description: "Concerned",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.avatar();

        message.channel.send(hentai.url);
        return;
    }
}