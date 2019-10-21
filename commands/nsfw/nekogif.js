const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "nekogif",
        aliases: [],
        description: "GIFS OF CATGIRLS COMMIT NSFW ACTS!!!!",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.nekoGif();

        message.channel.send(hentai.url);
        return;
    }
}