const { ApplicationCommandOptionType, EmbedBuilder, ActivityType } = require("discord.js");

module.exports = {
	name: "set-activity",
	description: "set the activity of bot",
	options: [
		{
		name: "activity",
		description: "custimize the activity",
		type: ApplicationCommandOptionType.String,
		required: true,
		},
		{
			name: "type",
			description: "type of activity (0= Playing, 1= Streaming, 2= Listening, 3= Watching)",
			type: ApplicationCommandOptionType.Number,
			require: false,
		}
	],

	async execute({ inter, client }) {
		const actvty = inter.options.getString("activity");
		const type = inter.options.getNumber("type");
		
		if (type < 0 || type > 5)
	  		return inter.editReply(`This is an illegal type... ${inter.member} try again?`);

		try{
			client.user.setActivity(actvty, { type: type });
		}catch{
			return inter.editReply(`An error catched during the process... ${inter.member} try again?`);
		}
		inter.editReply({ content: `Activity set to **${actvty}**` });
	}
};
