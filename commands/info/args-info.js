
module.exports = {
	name: 'args-info',
	description: 'Arguments Info',
	args: true,
	usage: '<user> <role>',
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
