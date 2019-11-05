const config = require('../../config.json')
const { inspect } = require('util')
module.exports = {
    config: {
        name: "eval",
        aliases: [],
        description: "",
        usage: "<code>",
        category: "owner"
    },
    run: async (client, message, args) => {
        if (message.author.id !== "246465033633005578") return;
        let womack = args.join(" ");
        let evaluated = inspect(eval(womack, {depth: 0}))
        try {
            if(womack){
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart)
                return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, {mmaxLength: 1900 })
            } else {
                message.reply(`evaluation error: empty args`);
            } 
        } catch (e) {
            message.reply(`evaluation error: \`${e.message}\``)
        }
        return;
    }
}
