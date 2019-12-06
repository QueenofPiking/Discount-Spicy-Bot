module.exports = async (client, member) => {
    
    const welcomeChannel = member.guild.channels.find(x => x.name === "gatekeeper");
    
    const messages = [
        `**${member.user.username}** left!`,
        `**${member.user.username}** just got shot by Takaya!`,
        `**${member.user.username}** Went and pulled a Shinjiro!`,
        `**${member.user.username}** Fought the Indolent Maya!`,
        `**${member.user.username}** has been executed by Mitsuru!`,
        `**${member.user.username}**, Was hit by a Mind Charge Black Viper!`,
        `**${member.user.username}** Was raped by Mara!`,
        `**${member.user.username}** went to go solo the Reaper!`,
        `**${member.user.username}** challenged Strega`,
        `**${member.user.username}** found out what happens when you become Akihiko and inject straight protein into your blood stream`,
        `**${member.user.username}** Got Arsene'd Aerialed  at 15%`
    ];
    
    if(!welcomeChannel) return;
    
    const message = Math.floor(Math.random() * (messages.length - 1) + 1);
    
    welcomeChannel.send(messages[message]);
}