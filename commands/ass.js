const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ass')
		.setDescription('asks the age old question'),
	async execute(interaction) {
		await interaction.reply(`ass or tits? ${interaction.user}`);
		await setTimeout(function (){
			const ass = ['tits','ass'];
			const select = ass[Math.floor((Math.random()*2))];
			interaction.editReply(`the correct answer is ${select}`);
		}, 5000);
	}
};