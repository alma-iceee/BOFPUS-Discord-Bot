
module.exports = {
	name: 'speech',
	description: 'Text To Speech',
	args: true,
	execute(message, args) {
		message.channel.send(args, {
			tts: true
		});
	},
};
