
import { Client, GatewayIntentBits } from "discord.js";

const BOT_TOKEN = process.env.BOT_TOKEN;


// Channel IDs
const ICAD_CHANNEL = "1438695548638199940";
const ARCHIVE_CHANNEL = "1438870244176171008";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`ICAD Archive Bot is online as ${client.user.tag}`);
});

client.on("messageCreate", async (msg) => {
  if (msg.channel.id !== ICAD_CHANNEL) return;
  if (!msg.author.bot) return;

  const archive = await client.channels.fetch(ARCHIVE_CHANNEL);
  if (!archive) {
    console.log("Archive channel not found.");
    return;
  }

  await archive.send({
    content: msg.content || null,
    embeds: msg.embeds.length ? msg.embeds : []
  });
});

client.login(BOT_TOKEN);
