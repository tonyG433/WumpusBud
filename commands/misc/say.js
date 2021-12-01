
module.exports = {
    name: 'say',
    description: 'Makes the bot say the specified message',
    aliases: ['talk'],
    usage: '<message>',
    category: 'misc',
    permissions: 'ADMINISTRATOR', // keeping this closed to admins because this can be heavily abused, so uh, yeah.
    run (client, message, args) {
        const said = args.join(' ')

        if (!said || !args[0]) {
            return message.channel.send('d')
        }

        message.delete() //deletes the original message

        message.channel.send(said)
    }
}