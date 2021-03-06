const fs = require('fs');
const Discord = require('discord.js');
const checkForSecret = require('./secret.js');
const { prefix, token, secret } = require('./config.json');

const client = new Discord.Client();

// list of commands in ./commands
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Ready!');
});

client.on('message', message => {

  if (message.author.bot) return;

  checkForSecret.execute(client, message, secret);

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }

});

client.login(token);