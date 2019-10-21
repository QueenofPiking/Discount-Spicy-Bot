const Discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = async (client, message) => {
    let presecnes = [
        "Destroying Heterosexuality!~ One Boomer at a time!~",
        "01100011 01110101 01101101",
        "Pike has sold his child into slavery",
        "Junpei has smashed Ken's brain with a baseball bat",
        "Mitsuru preps the execution of Junpei",
        "Yukari has found the Fuuka x Mitsuru x Yukari Fanfiction",
        "Morgana got fucking shot by Satanael",
        "Akihiko Fucking Kills a Bear with his Bear Hands",
        "Casual Crucifixion being done on SEES",
        "Guys where is Shinji i'm being serious right now",
        "Someone touched Aigis's CPU"
    ]
    setInterval(() => {
        const presence = Math.floor(Math.random() * (presecnes.length - 1) + 1);
        client.user.setPresence({ game: { name: `${prefix}help | ${presecnes[presence]}` }, status: "online"});
    }, 30000)
    console.log(`${client.user.username} is online! \nPike's Peak has ${client.users.size} users!`);
}