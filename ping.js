const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responde com 'Tuzim!"),

    async execute(interaction) {
        await interaction.reply("Tuzim!")
    }
}