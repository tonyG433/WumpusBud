const fs = require('fs')
const logger = require('../utils/logger')
const chalk = require('chalk')

module.exports = (client) => {
    for (const folder of client.categories) {
        if (folder === 'context') continue

        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('js') || file.endsWith('ts')) // <= what could this possibly mean!?!?!?!
        logger('Load', 'Searching for ' + chalk.underline.white(folder) + ' ' + 'commands...\n' )
        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`)
            client.commands.set(command.name, command)
            logger('Command', chalk.magenta`${file}` + ' ' + 'has been loaded!')
        }
    }
}