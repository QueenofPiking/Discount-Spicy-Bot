const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "owoify",
        aliases: [],
        description: "owoify something",
        usage: "<text>",
        category: "general"
    },
    run: async(client, message, args) => {
        let cum = args.join(" ");
        let owo = await neko.sfw.OwOify({ text: cum });
        message.channel.send(owo);
        return; 
    }
}