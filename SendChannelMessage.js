const { Client } = require('discord.js');
const client = new Client();
const IMAGE = "https://raw.githubusercontent.com/yemreeke/Discord-Channel-Messaging-Bot/main/logo.png";
const exampleEmbed = {
  color: 0x0099ff,
  title: "Link",
  url: "https://github.com/yemreeke",
  author: {
    name: "Github Profile",
    icon_url: IMAGE
  },
  thumbnail: {
    url: IMAGE,
  },
  fields: [
    {
      name: 'Hello World',
      value: 'Merhaba Dünya',
    }],
  timestamp: new Date().toISOString(),
  footer: {
    text: "Github hesabımı takip ederseniz sevinirim.",
    icon_url: IMAGE,
  },
};
client.login('token'); // token 'ı kendi tokenınız ile değiştirmeyi unutmayın.
client.on("ready", async () => {
  client.user.setActivity('🤖 Hello World 🤖', { type: 'PLAYING' });
  client.channels.fetch('kanal_id').then(channel => { // kanal_id'yi mesaj gönderilmesini istediğiniz kanal id ile değiştiriniz.
    channel.send({ embed: exampleEmbed }).then(() => {
      process.exit()
    })
  });
});