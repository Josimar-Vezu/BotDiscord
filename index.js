const { Client, Events, GatewayIntentBits } = require('discord.js');

// dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env

// importação dos comandos
const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	if ("data" in command && "execute" in command) {

	}
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login Realizado como ${c.user.tag}`)
});

client.login(TOKEN);