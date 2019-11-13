module.exports = async (client, member) => {
    //defines the #welcome channel
    const welcomeChannel = member.guild.channels.find(x => x.name === "gatekeeper");
    //stores a bunch of values into one variable for later use
    const messages = [
        `**${member.user.username}** left!`,
        `**${member.user.username}**, Libtard Destroyed.`,
        `**${member.user.username}** is gone!`,
        `**${member.user.username}** didn't suck off Daddy Jack!`,
        `**${member.user.username}** has been Suspended`,
        `**${member.user.username}**, Has Alt F4ed IRL!`,
        `**${member.user.username}** Was raped by Mara!`,
        `**${member.user.username}** went to go solo the Reaper!`,
        `**${member.user.username}** challenged Strega`,
        `**${member.user.username}** found out what happens when you become Akihiko and inject straight protein into your blood stream`
    ];
    //checks if the #welcome channel exists
    if(!welcomeChannel) return;
    //defines a message as a random value and selects the value from the array above
    const message = Math.floor(Math.random() * (messages.length - 1) + 1);
    //sends the random value to the #welcome channel
    welcomeChannel.send(messages[message]);
}