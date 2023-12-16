const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is Online`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === 'hello') {
    msg.reply("hey welcome to Devconnect Community");
  }
});
client.login(
  "MTE4NTU4MzAyMjAzMzA5NjgwNQ.G9qlzj.zdC7R8x9Ky8zQt2R5SbbHXen25ZuFsom63lx14"
);
