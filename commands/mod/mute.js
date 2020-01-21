const { Attachment } = require("discord.js");
let picture = new Attachment("https://i.kym-cdn.com/entries/icons/original/000/026/270/actually.jpg", "picture.jpg");

module.exports = {
    config: {
        name: "mute",
        aliases: ["m"],
        description: "Mute anyone being troublesome",
        usage: "@user",
        category: "mod"
    },
    run: async (client, message, args) => {
        await message.delete();
        let muted = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]));
        if(!muted) return message.reply("Give a specific @ please!")
        if(muted.id === message.author.id) return message.reply(`Actually, Quantum Mechanics forbids this. ${picture}`);
        
    }
}