
module.exports = {
	name: 'unban',
	description: 'Unban User',
	guildOnly: true,
	args: true,
	permissions: 'BAN_MEMBERS',
	execute(message, args) {
		const id = args[0];

		message.guild.members.unban(id);
	},
};
