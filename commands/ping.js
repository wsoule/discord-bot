const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Selects a user to ping')
        .addUserOption(option => option.setName('target').setDescription('select a user to ping')),
	async execute(interaction) {
        const selected = interaction.options.getUser('target');
        if(selected) return await interaction.reply({content: `you pinged ${selected.tag}!`, ephemeral : false});
        return interaction.reply('naw');
	}
};