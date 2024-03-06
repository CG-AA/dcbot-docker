const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "voice-rename",
  description: "Rename the voice channel",
  voiceChannel: true,
  options: [
	{
		name: "name",
		description: "the name to set",
		type: ApplicationCommandOptionType.String,
		required: true,
	},
  ],

	async execute({ inter, client }) {
		const name = inter.options.getString("name");

		console.log(`new name = ${name}`);
		console.log(inter.member.voice.channel.name);

		if(name === inter.member.voice.channel.name){
			return inter.editReply(`The name of the voice channel is already set to **${name}**`);
		}

		inter.member.voice.channel.setName(name).catch(console.error);

		inter.editReply(`Name of the voice channel changed to **${name}**`);
  },
};
