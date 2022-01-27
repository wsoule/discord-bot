const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('chnaing!'),
	async execute(interaction) {
		console.log('execute');
		return interaction.reply('Pong!');
	}
};