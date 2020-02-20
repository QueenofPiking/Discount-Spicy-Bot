module.exports = async (client, member) => {
    var welcomechannel = member.guild.channels.find(x => x.name === "gatekeeper")
    let role1 = member.guild.roles.find(x => x.name === "Metaverse Traveler");
    if (member.guild.id === "650885407352815616") member.addRole(role1);
    let role2 = member.guild.roles.find(x => x.name === "Follower");
    if (member.guild.id === "656301713803837452") member.addRole(role2);
    let role3 = member.guild.roles.find(x => x.name === "Hot Thottie");
    if (member.guild.id === "668220215196123187") member.addRole(role3);
    let role4 = member.guild.roles.find(x => x.name === "Idol");
    if (member.guild.id === "671048151184179200") member.addRole(role4);
    if(!welcomechannel) return;
    welcomechannel.send(`Welcome to the Server! ${member} Make sure to read the rules or you will be hit by a Megidolaon! And have an amazing time in the server! Please @ or DM a staff member if you need assistance!`)
    return;
}