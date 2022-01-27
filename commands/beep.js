const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Replies with boop!'),
	async execute(interaction) {
		return interaction.reply('boop!');
	},
};