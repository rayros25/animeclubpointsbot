// messageCreate
// how the bot reacts to messages being sent?

module.exports = (client,message) => {
    //ignore all bots
    if(message.author.bot) return;
    //ignores all pms to the bot
    if(message.guild === null) return;
    
    //Ignore all messages not starting with the prefix
    if(message.content.indexOf(client.auth.prefix) !== 0) return;
    
    //standard argument/command name definition
    const args = message.content.slice(client.auth.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;

    cmd.run(client, message, args);
};
