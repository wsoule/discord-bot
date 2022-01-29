const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('choices')
        .setDescription('Sends a random gif!')
	.addStringOption(option =>
		option.setName('category')
			.setDescription('The gif category')
			.setRequired(true)
			.addChoice('Funny', 'https://tenor.com/view/haha-so-funny-gif-19663556')
			.addChoice('Meme', 'gif_meme')
			.addChoice('Movie', 'gif_movie')),
	async execute(interaction) {
        const choice = interaction.options.getString('category');
		await interaction.reply(choice);
	}
};