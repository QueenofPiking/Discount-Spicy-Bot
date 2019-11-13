module.exports = async (client, member) => {
    const welcomechannel = member.guild.channel.find(x => x.name === "gatekeeper")
    const role = member.guild.roles.find(x => x.name === "Peasant")
    if(!role) return;
    if(!welcomechannel) return;
    welcomechannel.send(`Welcome to this hellhole ${member} Make sure to read the rules!`)
    member.addRole(role.id);
    return;
}