const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame('Syrus Island')
});

client.on('message', msg => {
  if (msg.content === '!vote') {
    msg.channel.send('Tu peux voter pour le serveur ici : https://top-serveurs.net/gta/vote/syrus-island-wl');
  }
});

client.on('message', msg => {
    if (msg.content === '!ip') {
      msg.channel.send('```IP du serveur : 213.32.7.236:35295```');
    }
  });

  client.on('message', msg => {
    if (msg.content === '!jay') {
      msg.reply('Jay best dev ever');
    }
  });

  client.on('message', msg => {
    if (msg.content === '!zarwi') {
      msg.channel.send('Zarwi est un administrateur qui fait des vrais topo');
    }
  });

  client.on('message', msg => {
    if (msg.content === '!panzak') {
      msg.channel.send('Panzak suce ma bite');
    }
  });

  client.on('message', msg => {
    if (msg.content === '!kazz') {
      msg.channel.send('Kazz est une grosse folle...');
    }
  });




client.login(process.ev.TOKEN);
