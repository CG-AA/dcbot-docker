const { ApplicationCommandOptionType } = require("discord.js");

function csg(v){
	if(v == 'brazil'){
		return 'Brazil';
	}else if(v == 'hongkong'){
		return 'Hong Kong';
	}else if(v == 'india'){
		return 'India';
	}else if(v == 'japan'){
		return 'Japan';
	}else if(v == 'rotterdam'){
		return 'Rotterdam';
	}else if(v == 'russia'){
		return 'Russia';
	}else if(v == 'singapore'){
		return 'Singapore';
	}else if(v == 'southafrica'){
		return 'South Africa';
	}else if(v == 'sydney'){
		return 'Sydney';
	}else if(v == 'us-central'){
		return 'US Central';
	}else if(v == 'us-east'){
		return 'US East';
	}else if(v == 'us-south'){
		return 'US South';
	}else if(v == 'us-west'){
		return 'US West';
	}
}

module.exports = {
  name: "voice-set-region",
  description: "set the region override of your voice channel",
  voiceChannel: true,
  options: [
	{
		name: "region",
		description: "the region you want to change to",
		type: ApplicationCommandOptionType.String,
		required: true,
		choices: [Object( {name: 'Brazil', value: 'brazil'}), Object( {name: 'Hong Kong', value: 'hongkong'}), Object( {name: 'India', value: 'india'}), Object( {name: 'Japan', value: 'japan'}), Object( {name: 'Rotterdam', value: 'rotterdam'}), Object( {name: 'Russia', value: 'russia'}), Object( {name: 'Singapore', value: 'singapore'}), Object( {name: 'South Africa', value: 'southafrica'}), Object( {name: 'Sydney', value: 'sydney'}), Object( {name: 'US Central', value: 'us-central'}), Object( {name: 'US East', value: 'us-east'}), Object( {name: 'US South', value: 'us-south'}), Object( {name: 'US West', value: 'us-west'}),],
    },
  ],

	async execute({ inter, client }) {
		const region = inter.options.getString("region");
	
		console.log(region);
		console.log(inter.member.voice.channel.rtcRegion);

		if(region === inter.member.voice.channel.rtcRegion){
			return inter.editReply(`Your voice channel is already set to ${region}`);
		}
		
		try {
			inter.member.voice.channel.setRTCRegion(region).catch(console.error);
		} catch {
			inter.editReply(`Region error... ${inter.member} try again?`);
		}
	
		inter.editReply(`Region changed to **${csg(region)}**`);
  },
};


/*
'brazil', 'hongkong', 'india', 'japan', 'rotterdam', 'russia', 'singapore', 'south-korea', 'southafrica', 'sydney', 'us-central', 'us-east', 'us-south', 'us-west'
*/