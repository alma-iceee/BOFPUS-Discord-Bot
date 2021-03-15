
module.exports = {
	name: 'avatar',
	description: 'Get Users Avatars',
	aliases: ['icon', 'pfp'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
		});

		message.channel.send(avatarList);
	},
};
