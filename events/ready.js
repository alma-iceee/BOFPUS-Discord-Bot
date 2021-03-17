
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		client.generateInvite(['ADMINISTRATOR']).then(link => {
			console.log(link);
		});
	},
};
