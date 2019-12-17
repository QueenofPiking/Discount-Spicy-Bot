module.exports = async (client, member) => {
    var welcomechannel = member.guild.channels.find(x => x.name === "gatekeeper")
    var role = member.guild.roles.find(x => x.name === "Shujin Academy Student")
    var role = member.guild.roles.find(x => x.name === "Follower")
    if(!role) return;
    if(!welcomechannel) return;
    welcomechannel.send(`Welcome to the Server! ${member} Make sure to read the rules or you will be hit by a Megidolaon! `)
    member.addRole(role);
    return;
}