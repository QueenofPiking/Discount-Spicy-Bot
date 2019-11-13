module.exports = async (client, member) => {
    const welcomechannel = member.guild.channels.find(x => x.name === "gatekeeper");
    const messages = [
        `**${member.user.username}** left!`,
        `**${member.user.username}**, Has been smited by Jack`,
        `**${member.user.username}** is gone!`,
        `**${member.user.username}** Commited Deactivation`,
        `**${member.user.username}** has been hit with the Mind Charge Black Viper`,
        `**${member.user.username}**, has bluescreened`,
        `**${member.user.username}** has commited Takaya's Evoker`,
        `**${member.user.username}** Hit Nyx during Moonless Gown!`,
        `**${member.user.username}** Tried to solo the Reaper`
    ];
    if(!welcomechannel) return;
    const message = Math.floor(Math.random() * (message.length - 1) + 1);
    welcomechannel.send(messages[message]);


}
