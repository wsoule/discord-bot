const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ass')
		.setDescription('asks the age old question'),
	async execute(interaction) {
		await interaction.reply(`ass or tits? ${interaction.user}`), console.log(interaction.user);
	}
};