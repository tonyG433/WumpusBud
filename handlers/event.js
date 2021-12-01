const fs = require('fs')
const logger = require('../utils/logger')
const chalk = require("chalk");

module.exports = (client) => {
    const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
    logger('Load', 'Loading events...\n')

    for (const file of eventFiles) {
        const event = require(`../events/${file}`)

        logger('Event', chalk.magenta(`${file}`) + ' ' + 'event has been loaded!')

        if (event.once) {
            client.once(event.name, (...args) => event.run(...args, client))
        } else {
            client.on(event.name, (...args) => event.run(...args, client))
        }
    }
}