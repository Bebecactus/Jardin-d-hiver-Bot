const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'You are super') {
    message.reply('You are a hero');
  }
});

client.login('Mzg4NDYwNTg2MTY3Njk3NDE5.DQtYZA.EgMgeSd10w84Tg2_2mSVrVE0aJE');
