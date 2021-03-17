
module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 10,
	execute(message) {
		message.channel.send('Pong!');
	},
};
