const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Selects a user to ping')
        .addUserOption(option => 
			option.setName('target').setDescription('select a user to ping')
			.setRequired(true)),
	async execute(interaction) {
        const selected = interaction.options.getUser('target');
        if(selected) {
			return await interaction.reply({content: `${selected} is a bitch`, ephemeral: false});
		}
		else return interaction.reply('naw');
	}
};