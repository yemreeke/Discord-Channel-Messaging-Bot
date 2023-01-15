const { Client } = require('discord.js');
const client = new Client();
const exampleEmbed = {
  color: 0x0099ff,
  title: "Link",
  url: "https://github.com/yemreeke",
  author: {
    name: "Github Profile",
    // icon_url: IMAGE_URL,
  },
  thumbnail: {
    // url: IMAGE_URL,
  },
  fields: [
    {
      name: 'Hello World',
      value: 'Merhaba Dünya',
    }],
  timestamp: new Date().toISOString(),
  footer: {
    text: "Github hesabımı takip ederseniz sevinirim.",
    // icon_url: IMAGE_URL,
  },
};
client.login('token');
client.on("ready", async () => {
  client.user.setActivity('🤖 Hello World 🤖', { type: 'PLAYING' });
  client.channels.fetch('channel_id').then(channel => {
    channel.send({ embed: exampleEmbed }).then(() => {
      process.exit()
    })
  });
});