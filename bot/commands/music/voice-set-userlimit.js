const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "voice-set-userlimit",
  description: "set the userLimit of the voice chennal",
  voiceChannel: true,
  options: [
	{
		name: "limit",
		description: "the upper bound of userLimit of the voice chennal",
		type: ApplicationCommandOptionType.Number,
		required: true,
	},
  ],

	async execute({ inter, client }) {
		const lmt = inter.options.getNumber("limit");

		console.log(`lmt = ${lmt}`);
		console.log(inter.member.voice.channel.userLimit);

		if(lmt < 0 || lmt > 99){
			return inter.editReply(`This is an illegal limit\nThe limit must be between 0 and 99...\n${inter.member} try again?`);
		}

		if(lmt == inter.member.voice.channel.userLimit){
			return inter.editReply(`The userLimit is already set to ${lmt}`);
		}
		
		inter.member.voice.channel.setUserLimit(lmt).catch(console.error);

		inter.editReply(`UserLimit changed to **${lmt}**`);
  },
};
