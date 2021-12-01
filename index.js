const config = require('./config.json')
const fs = require("fs");
const mongoose = require('mongoose');
const chalk = require("chalk")
const logger = require('./utils/logger')
const {Client, Intents, Message, Collection} = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES
    ],
    allowedMentions: { parse: ["roles", "users"] },
    partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'],
    presence: {
        activities: [{
            name: `myself being developed `,
            type: 'WATCHING'
        }]
    }
});

client.commands = new Collection()

// My favourite
client.slashCommands = new Collection()

// collection of the command categories which are the folders in the commands folder
client.categories = fs.readdirSync('./commands')

// loads the commands
require('./handlers/command')(client)

// loads the events
require('./handlers/event')(client)

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    logger('MongoDB', 'Successfully connected to MongoDB!')
}).catch(e => {
    logger('Error', `Could not connect to MongoDB! Error: \n${e}`)
})

client.login(config.token);