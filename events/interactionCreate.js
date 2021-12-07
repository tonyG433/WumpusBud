
const { MessageEmbed } = require('discord.js');
const {devs} = require("../config.json");

module.exports = {
    name: 'interactionCreate',
    async run(interaction, client) {
        if (interaction.isCommand()) {
            const command = client.slashCommands.get(interaction.commandName);

            if (!command) return;

            let { permissions } = command
            if ((permissions === 'BOT_DEV' || command.category === 'dev') && !devs.includes(interaction.user.id)) return interaction.reply('You arent a dev pussy')

            try {
                await command.slashRun(client, interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    }
}