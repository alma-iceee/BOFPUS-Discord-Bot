
module.exports = {
	name: 'role',
	description: 'Add Role To User',
	guildOnly: true,
	args: true,
	permissions: 'MANAGE_ROLES',
	execute(message, args) {
		const role = message.guild.roles.cache.find(role => role.name === args[0]);

		const member = message.mentions.members.first();

		member.roles.add(role);
	},
};
