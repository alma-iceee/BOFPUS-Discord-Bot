
module.exports = {
	name: 'ban',
	description: 'Ban User',
	guildOnly: true,
	permissions: 'BAN_MEMBERS',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to ban them!');
		}

		const taggedUser = message.mentions.users.first();

		if (taggedUser) {
			const member = message.guild.member(taggedUser);

			if (member) {
				member
					.ban({
						reason: 'You were being bad!',
					})
					.then(() => {
						message.channel.send(`${taggedUser.username} is successfully banned`);
					})
					.catch(err => {
						console.error(err)
					});
			}
		}
	},
};
