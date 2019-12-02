module.exports = async (client, member) => {
    const welcomechannel = member.guild.channels.find(x => x.name === "gatekeeper")
    const role = member.guild.roles.find(x => x.name === "Phantom Thieves")
    if(!role) return;
    if(!welcomechannel) return;
    welcomechannel.send(`Welcome to the Metaverse! ${member} Make sure to read the rules or you will be crushed by Mara! `)
    member.addRole(role.id);
    return;
}