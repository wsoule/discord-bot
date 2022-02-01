const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
	    .setName('search')
	    .setDescription('gives youtube link to search')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The seach bar')
                .setRequired(true)),
    async execute(interaction) {
        let searched = interaction.options.getString('input');
        const find = searched.indexOf(' ');
        searched = searched.replace(/ /g,'+');
        
        console.log(searched);
        await interaction.reply(`https://www.youtube.com/results?search_query=${searched}`)
    }
}