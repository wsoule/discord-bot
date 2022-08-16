const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask question')
		.setDescription('asks the age old question'),
	async execute(interaction) {
		await interaction.reply(`one or two? ${interaction.user}`);
		await setTimeout(function (){
			const selection = ['two','one'];
			const select = selection[Math.floor((Math.random()*2))];
			interaction.editReply(`the correct answer is ${select}`);
		}, 5000);
	}
};