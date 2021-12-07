const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Claim your daily coins and add them to your balance!'),
    async slashRun(client, interaction) {

            let min = Math.ceil(3000);
            let max = Math.floor(3550);
            let dailyCoins = Math.floor(Math.random() * (max - min) + min)
            const ayy = client.emojis.cache.get("917516477790306375");

        const embed = new MessageEmbed()
            .setTitle('Your daily coins!')
            .setDescription(`You have claimed your free daily bonus coins! ${dailyCoins} coins ${ayy} have been added to your balance`)
            .setFooter('Thank you for using WumpusBud!')
            .setColor('#7784e8')

        //TODO: Set claimedDaily to true and also add the daily coins in the db, like 0 + 3322

        await interaction.reply({content: null, embeds: [embed]})

    }
};