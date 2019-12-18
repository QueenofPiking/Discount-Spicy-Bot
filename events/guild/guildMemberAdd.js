module.exports = async (client, member) => {
    var welcomechannel = member.guild.channels.find(x => x.name === "gatekeeper")
    var role = member.guild.roles.find(x => x.name === "Shujin Academy Student")
    let role1 = member.guild.roles.find(x => x.name === "Shujin Academy Student");
    if (member.guild.id === "650885407352815616") member.addRole(Shujin Academy Student);
    var role = member.guild.roles.find(x => x.name === "Follower")
    let role2 = member.guild.roles.find(x => x.name === "Follower");
    if (member.guild.id === "656301713803837452") member.addRole (Follower);
    if(!role) return;
    if(!welcomechannel) return;
    welcomechannel.send(`Welcome to the Server! ${member} Make sure to read the rules or you will be hit by a Megidolaon! `)
    member.addRole(role);
    return;
}