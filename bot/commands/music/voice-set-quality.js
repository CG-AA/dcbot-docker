const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "voice-set-quality",
  description: "set the bitRate of the voice",
  voiceChannel: true,
  options: [
	{
		name: "bitrate",
		description: "the bit rate the voice be set(unit: **kbps**, UpperBound: **128 kbps**)",
		type: ApplicationCommandOptionType.Number,
		required: true,
	},
  ],

	async execute({ inter, client }) {
		const bitRate = inter.options.getNumber("bitrate");

		console.log(`bit rate = ${bitRate}`);
		console.log(inter.member.voice.channel.bitrate);

		if(bitRate < 8 || bitRate > 128){
			return inter.editReply(`This is an illegal bit rate\nThe rate must be between **8 kbps** and **128 kbps**...\n${inter.member} try again?`);
		}
		
		if(bitRate * 1000 == inter.member.voice.channel.bitrate){
			return inter.editReply(`The bit rate is already set to **${bitRate} kbps**`);
		}

		inter.member.voice.channel.setBitrate(bitRate * 1000).catch(console.error);

		inter.editReply(`Bit rate changed to **${bitRate} kbps**`);
  },
};
