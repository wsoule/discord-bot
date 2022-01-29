const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');
const fs = require('fs');

const commands = [];
let commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// console.log(commandFiles);
// commandFiles = commandFiles.slice(commandFiles.length - 1);
// Place your client and guild ids here
const clientId = '935612949341544478';
// const guildId = '844337536720961566';

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		// console.log('commands', commands.length);
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);
		// console.log('commands', commands);
		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();