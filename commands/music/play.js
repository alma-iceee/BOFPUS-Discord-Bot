
const {google} = require('googleapis');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
	description: 'Play Music',
	args: true,
	execute(message, args) {
		let item;

		google.youtube('v3').search.list({
			key: youtube_token,
			part: 'snippet',
			type: 'video',
			q: args.slice(0),
		}).then((response) => {
			const { data } = response;
			item = data.items[0];

			console.log(data.items[0]);

			data.items.forEach((item) => {
				console.log(`Title: ${item.snippet.title}\n${item.snippet.description}\n`)
			})
		}).catch((err) => console.log(err));
	},
};
