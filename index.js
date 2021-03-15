
const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(process.env.PREXIF) || message.author.bot) {
		return;
	}

	const args = message.content.slice(process.env.PREXIF.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
	} else if (command === 'server') {
		client.commands.get('server').execute(message, args);
	} else if (command === 'user-info') {
		client.commands.get('user-info').execute(message, args);
	} else if (command === 'args-info') {
		client.commands.get('args-info').execute(message, args);
	} else if (command === 'kick') {
		client.commands.get('kick').execute(message, args);
	} else if (command === 'avatar') {
		client.commands.get('avatar').execute(message, args);
	} else if (command === 'prune') {
		client.commands.get('prune').execute(message, args);
	}
});

client.login(process.env.DISCORD_TOKEN);
