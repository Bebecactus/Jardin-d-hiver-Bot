const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(Mzg4NDYwNTg2MTY3Njk3NDE5.DQ484A.cCbjqUekXaz7NpVNbjxqPm5Ckuk);
