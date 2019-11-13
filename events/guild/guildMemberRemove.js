module.exports = async (client, member) => {
    
    const welcomeChannel = member.guild.channels.find(x => x.name === "gatekeeper");
    
    const messages = [
        `**${member.user.username}** left!`,
        `**${member.user.username}** just got shot by Takaya!`,
        `**${member.user.username}** is gone!`,
        `**${member.user.username}** didn't suck off Daddy Jack!`,
        `**${member.user.username}** has been Suspended`,
        `**${member.user.username}**, Has Alt F4ed IRL!`,
        `**${member.user.username}** Was raped by Mara!`,
        `**${member.user.username}** went to go solo the Reaper!`,
        `**${member.user.username}** challenged Strega`,
        `**${member.user.username}** found out what happens when you become Akihiko and inject straight protein into your blood stream`
    ];
    
    if(!welcomeChannel) return;
    
    const message = Math.floor(Math.random() * (messages.length - 1) + 1);
    
    welcomeChannel.send(messages[message]);
}