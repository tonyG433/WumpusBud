const fs = require('fs')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId, guildId, token } = require('../../config.json')
const logger = require('../../utils/logger')
const embed = require('discord.js')
const {MessageEmbed} = require("discord.js");

const rest = new REST({ version: 9 }).setToken(token)

module.exports = {
    name: 'deploy',
    description: 'Deploys slash commands',
    aliases: ['deployus'], // Funny among us i am kept hostage help me please
    category: 'dev',
    permissions: 'BOT_DEV',
    async run (client, message, args) {
        require('../../handlers/slashCommand')(client, true)
            .then(() => {
                logger('DEPLOY', 'Slash commands have been successfully deployed.')
                let embed = new MessageEmbed()
                    .setTitle('You have successfully deployed the / commands! ')
                    .setColor('RANDOM')
                message.channel.send({ embeds: [embed]})
            })
    }
}