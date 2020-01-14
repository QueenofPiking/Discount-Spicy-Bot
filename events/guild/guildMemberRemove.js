module.exports = async (client, member) => {
    
    const welcomeChannel = member.guild.channels.find(x => x.name === "gatekeeper");
    
    const messages = [
        `**${member.user.username}** Became Door-kun!~`,
        `**${member.user.username}** Attempted to best Nyarlathotep!`,
        `**${member.user.username}** Went and pulled a Shinjiro!`,
        `**${member.user.username}** Fought the Indolent Maya!`,
        `**${member.user.username}** has been executed by Mitsuru!`,
        `**${member.user.username}** Was hit by a Hassou Tobi!`,
        `**${member.user.username}** Saw Shade post cropped Morgana Hentai!`,
        `**${member.user.username}** went to go solo the Reaper!`,
        `**${member.user.username}** got hunted down by Strega!`,
        `**${member.user.username}** found out what happens when you piss off Makoto Stans!`,
        `**${member.user.username}** Tried to fight Demi-Fiend!`,
        `**${member.user.username}** Got the Persona 1 and Persona 2 treatment!`,
        `**${member.user.username}** Got stored into the ATLUS Vault!`,
        `**${member.user.username}** Saw Female Ren being horny on the timeline again!`
    ];
    
    if(!welcomeChannel) return;
    
    const message = Math.floor(Math.random() * (messages.length - 1) + 1);
    
    welcomeChannel.send(messages[message]);
}