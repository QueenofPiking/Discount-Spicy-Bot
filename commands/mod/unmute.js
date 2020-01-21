const { Attachment } = require("discord.js");
let picture = new Attachment("https://i.kym-cdn.com/entries/icons/original/000/026/270/actually.jpg", "picture.jpg");

module.exports = {
    config: {
        name: "unmute",
        aliases: ["um"],
        description: "Unmute someone when their sentence is up",
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
                    SEND_MESSAGES: null,
                    ADD_REACTIONS: null,
                    CONNECT: null,
                    SPEAK: null,
                });
            });
        } catch (e) {
            if(e) console.log(e.stack);
        }

        return message.reply(`${muted} has escaped the Shadow Realm!`)
    }
}