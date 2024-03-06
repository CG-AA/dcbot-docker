const maxVol = client.config.opt.maxVol;
const defVol = client.config.opt.volume;
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
	name: 'defaultvolume',
	description: `set the volume to default : ${defVol}/${maxVol}% 🔊`,
	voiceChannel: true,

	execute({ inter }) {
		const player = useMainPlayer();

		const queue = useQueue(inter.guild);

		if (!queue) return inter.editReply({ content: `No music currently playing ${inter.member}... try again ?`, ephemeral: true });

		if (queue.node.volume === defVol) return inter.editReply({ content: `The volume you want to change is already the current one ${inter.member}... try again ?`, ephemeral: true });

		const success = queue.node.setVolume(defVol);

	   return inter.editReply({ content: success ? `The volume has been modified to ${defVol}/${maxVol}% 🔊` : `Something went wrong ${inter.member}... try again ?` });
	},
};