const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config();


client.once('ready', () => {
    console.log('Bot is online!');
});

client.login('process.env.TOKEN');
