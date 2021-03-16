
module.exports = {
	name: 'kick',
	description: 'Kick User',
	guildOnly: true,
	permissions: 'KICK_MEMBERS',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		if (taggedUser) {
			const member = message.guild.member(taggedUser);

			if (member) {
				member
					.kick('You were being bad!')
					.then(() => {
						message.channel.send(`${taggedUser.username} is successfully  kicked`);
					})
					.catch(err => {
						message.reply('I was unable to kick the member');
						console.error(err)
					});
			} else {
				message.reply("That user isn't in this guild!");
			}
		}
	},
};
