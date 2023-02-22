const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env

// importação dos comandos
const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	console.log(command)
	if ("data" in command && "execute" in command) {
		client.commands.set(command.data.name, command)
	} else {
		console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausentes`)
	}
}

console.log(client.commands)

client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login Realizado como ${c.user.tag}`)
});

client.login(TOKEN)