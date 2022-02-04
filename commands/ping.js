// ping
// The most basic command, it makes sure the bot is online and functioning

exports.run = (client, message, args) => {
    message.channel.send('All systems nominal.');
};
