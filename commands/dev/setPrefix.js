const { setPrefix, getPrefix} = require('../../utils/db/prefix-utils')
// TODO: Embed all of these i guess

module.exports = {
    name: 'setPrefix',
    description: 'Set the bot\'s prefix',
    aliases: ['sp'],
    category: 'config',
    permissions: 'BOT_DEV', // Since users are able to use slash commands, there is no point in them setting the prefix
    async run (client, message, args) {
        let newPrefix = args[0]
        const currentPrefix = await getPrefix(message.guild?.id)

        if(!newPrefix) return message.channel.send('Couldn\'t detect a valid prefix.')

        if (['-default', '-reset'].includes(newPrefix)) newPrefix = 'w!'

        if(newPrefix.length > 5) return message.channel.send('Prefix must be 5 or less characters!')

        if(newPrefix === currentPrefix) return message.channel.send('That\'s already the bot\'s prefix!')

        setPrefix(message.guild.id, newPrefix)
        message.channel.send(`Set the bot\'s prefix to ${newPrefix}`)

    }
}