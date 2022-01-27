const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping-new')
		.setDescription('new ping!'),
	async execute(interaction) { console.log('execute');
		return interaction.reply('Pong!');
	},
};