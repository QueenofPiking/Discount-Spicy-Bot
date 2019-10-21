module.exports = {
    config: {
        name: "clear",
        aliases: [],
        description: "delete shit in bulk lmao",
        usage: "<number>",
        category: "mod"

    },
    run: async (client, message, args) => {
        await message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("I need the Manage Messages permission before I can utilize this command for all your totally not exploitive purposes!")
        if(!args[0]) return message.reply("I need to know how many you want me to destroy!")
        if(args[0] >= 101) return message.reply ("The Discoridan Gods only allow me to delete up to 100 messages DEATH TO THE MPLA!");

        let number = args[0]
        message.channel.bulkdelete(args[0]);
        message.reply(`cleared ${args[0]} messages! /nmessages older than 14 days old cannot be cleared`).then(msg => msg.delete(8000));
        
    }
}