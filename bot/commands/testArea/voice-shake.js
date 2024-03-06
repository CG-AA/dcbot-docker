const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
	name: 'voice-shake',
	description: 'shake someone who is in voice channel with mute',
	voiceChannel: true,
	options: [
		{
			name: 'member',
			description: 'who you want to shake',
			type: ApplicationCommandOptionType.User,
			required: true
		}
	],

	execute({ inter }) {
		const member = inter.options.getUser('member');
	},
};