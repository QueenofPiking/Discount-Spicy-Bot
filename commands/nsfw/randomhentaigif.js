const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "randomhentaigif",
        aliases: [],
        description: "A random hentai gif",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.randomHentaiGif();

        message.channel.send(hentai.url);
        return;
    }
}