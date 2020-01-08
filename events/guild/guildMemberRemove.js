module.exports = async (client, member) => {
    
    const welcomeChannel = member.guild.channels.find(x => x.name === "gatekeeper");
    
    const messages = [
        `**${member.user.username}** Became Door-kun!~`,
        `**${member.user.username}** just got shot by Takaya!`,
        `**${member.user.username}** Went and pulled a Shinjiro!`,
        `**${member.user.username}** Fought the Indolent Maya!`,
        `**${member.user.username}** has been executed by Mitsuru!`,
        `**${member.user.username}**, Was hit by a Mind Charge Black Viper!`,
        `**${member.user.username}** Said P5 Was overrated`,
        `**${member.user.username}** went to go solo the Reaper!`,
        `**${member.user.username}** challenged Strega`,
        `**${member.user.username}** found out what happens when you become Akihiko and inject straight protein into your blood stream`,
        `**${member.user.username}** Joined the SMT Fanbase`,
        `**${member.user.username}** Got the Persona 1 and Persona 2 treatment`
    ];
    
    if(!welcomeChannel) return;
    
    const message = Math.floor(Math.random() * (messages.length - 1) + 1);
    
    welcomeChannel.send(messages[message]);
}