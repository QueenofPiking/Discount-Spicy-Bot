module.exports = {
    config: {
        name: "avatar",
        aliases: ["pfp"],
        description: "Steal other people profile pictures!",
        usage: "(@user)",
        category: "general"
    },
    run: async (client, message, args) => {
        let auser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(auser) {
            message.channel.send(`Here is a link to ${auser}'s avatar: \n${auser.user.avatarURL}`);
        } else {
            message.channel.send(`Here is a link you your avatar: \n${message.author.avatarURL}`);
        }

        return;
    }
}