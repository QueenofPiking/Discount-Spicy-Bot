const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "feet",
        aliases: [],
        description: "Horny fuck liking feet",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.feet();

        message.channel.send(hentai.url);
        return;
    }
}