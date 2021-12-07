const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientId, guildId } = require('../config.json');
const fs = require('fs');
const logger = require('../utils/logger')
const chalk = require("chalk");

const rest = new REST({ version: '9' }).setToken(token);

module.exports = async (client, forDeploy) => {
    const arrayCommands = [];

    for (const folder of fs.readdirSync('./slashCommands')) {
        const arrayCommands = [];
        const slashCommandFiles = fs.readdirSync(`./slashCommands/${folder}`).filter(file => file.endsWith('.js'));
        logger('Load', `Looking for `+ chalk.underline.white(folder) +` slash commands...\n`)

        for (const file of slashCommandFiles) {
            const command = require(`../slashCommands/${folder}/${file}`);

            logger('Command', chalk.magenta(file) + ` slash command has been loaded!`)


            if (!forDeploy) client.slashCommands.set(command.data.name, command)
            else {

                arrayCommands.push(command.data.toJSON())
            }
        }
        if (forDeploy) {
            try {
                await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    {
                        body: arrayCommands.map(c => {
                            delete (c.permissions)

                            return c
                        })
                    }
                )
                console.log(arrayCommands)
            } catch (err) {
                console.error(err)
            }
        }
    }
}







