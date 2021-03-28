
const dotenv = require('dotenv');
dotenv.config();

const {google} = require('googleapis');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
	description: 'Play Music',
	args: true,
	async execute(message, args) {
		let item;

		google.youtube('v3').search.list({
			key: process.env.YOUTUBE_TOKEN,
			part: 'snippet',
			type: 'video',
			q: args,
		}).then((response) => {
			const { data } = response;
			item = data.items[0];

			console.log(data.items[0]);

			message.reply(`Title: ` + item.snippet.title);
		}).catch((err) => console.log(err));

		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			const url = `https://www.youtube.com/watch?v=${item.id.videoId}`;

			const dispatcher = ytdl(url, { filter: 'audioonly' });
			connection.play(dispatcher);
		} else {
			message.reply('You need to join a voice channel first!');
		}
	},
};
