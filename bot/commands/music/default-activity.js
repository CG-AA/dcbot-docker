
const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: "default-activity",
	description: "set the activity of bot to default",

	async execute({ inter, client }) {
		
		try{
			client.user.setActivity(client.config.app.playing);
		}catch{
			return inter.editReply(`An error catched during the process... ${inter.member} try again?`);
		}
		inter.editReply({ content: `Activity set to **${client.config.app.playing}**` });
	}
};
