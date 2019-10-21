const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "Femboy",
        aliases: [],
        description: "Delicious Femboys like Generic OwO~",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.trap();

        message.channel.send(hentai.url);
        return;
    }
}