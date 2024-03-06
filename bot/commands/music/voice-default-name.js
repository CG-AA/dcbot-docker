const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "voice-default-name",
  description: "Set the name of the voice channel to default",
  voiceChannel: true,

	async execute({ inter, client }) {
		console.log(inter.member.voice.channel.name);
		console.log(inter.member.user.globalName);

		inter.member.voice.channel.setName(inter.member.user.globalName + '\'s channel').catch(console.error);

		inter.editReply(`Name of the voice channel changed to **${inter.member.user.globalName}'s channel**`);
	},
};
