const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong! Check WumpusBud\'s latency'),
    async slashRun(client, interaction) {

        const apiLatency = Math.round(client.ws.ping)

        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .addField('API Latency', `\`${apiLatency}\`ms`)
            .setColor('RANDOM')

        await interaction.reply({content: null, embeds: [embed]})

    }
};