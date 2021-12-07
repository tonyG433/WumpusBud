const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Invite the bot to your server.'),
    async slashRun(client, interaction) {

        let embed = new MessageEmbed()
            .setTitle("Invite me!")
            .setDescription("Invite me to your server, by clicking the button bellow or by using the \"Add to server\" button on my profile! ")
            .setThumbnail("https://cdn.discordapp.com/avatars/914468878401282068/38f77403d714e6cf0f97a458f34f648c.webp?size=80")
            .setColor('#7784e8')
        let row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Invite the bot')
                    .setStyle('LINK')
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=914468878401282068&permissions=138647300160&scope=bot%20applications.commands'),
            );

        interaction.reply({ embeds: [embed], components:[row]})

    }
};