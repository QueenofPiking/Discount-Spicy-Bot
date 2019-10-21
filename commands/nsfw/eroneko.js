const client = require("nekos.life");
const neko = new client();


module.exports = {
    config: {
        name: "Eroneko",
        aliases: [],
        description: "Eroneko shits for all!!!!!",
        usage: "",
        category: "nsfw"
    },
    run: async(client, message, args) => {
        if(!message.channel.nsfw) return;
        let hentai = await neko.nsfw.eroNeko();

        message.channel.send(hentai.url);
        return;