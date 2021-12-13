const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder()
        .setName('create-wumpus')
        .setDescription('Create your very own Wumpus')
        .addStringOption(option =>
          option.setName('name')
            .setDescription('Your Wumpus\' name')
            .setRequired(true))
        .addBooleanOption(option => option.setName('has-hat').setDescription('Style your wumpus with a hat')),

    async slashRun(client, interaction) {
        let name = interaction.options.getString(`name`)
        if(name.length > 10) return interaction.reply({content: 'The name cannot be over 10 characters!', ephemeral: true})

        const hashat = interaction.options.getBoolean('has-hat')

        const d = new Date();
        console.log(hashat)
        let timestamped = Math.floor(d / 1000)
        console.log(d) // The date you are putting in the db

        let embed = new MessageEmbed()
            .setTitle('Your wumpus is alive!')
            .addField('Name', `\`${name}\``)
            .addField('Birthday', `<t:${timestamped}:D>`)
            .setColor('#7784e8')

        //TODO: Canvas

        if(!hashat) {
            console.log('embed.setImage and the wumpus');
            return await interaction.reply({ embeds: [embed] })
        }

        console.log('embed.setImage and wumpus with a hat.')
        // if(hashat === true) {
        //     console.log('embed.setImage and wumpus with hat')
        // }
        // This shit? No. No more of this shit.  

        await interaction.reply({ embeds: [embed] })

    }
};