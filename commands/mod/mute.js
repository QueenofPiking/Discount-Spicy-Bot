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
        let muted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!muted) return message.reply("Give a specific @ please!")
        if (muted.id === message.author.id) return message.reply(`Actually, Quantum Mechanics forbids this.`, {
            file: "https://i.kym-cdn.com/entries/icons/original/000/026/270/actually.jpg"
        });
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Shut the fuck up")

        try {
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muted, {
                    VIEW_CHANNEL: null,
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    CONNECT: true,
                    SPEAK: false,
                });
            });
        } catch (e) {
            if(e) console.log(e.stack);
        }

        return message.reply(`${muted} has been silenced!`)
    }
}