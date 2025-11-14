> import { Client, GatewayIntentBits } from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";
^^^^^^

Uncaught:
SyntaxError: Cannot use import statement inside the Node.js REPL, alternatively use dynamic import: const { Client, GatewayIntentBits } = await import("discord.js");
>
> const BOT_TOKEN = process.env.BOT_TOKEN;
undefined
>
> // Channel IDs:
undefined
> const ICAD_CHANNEL = "1438695548638199940";
undefined
> const ARCHIVE_CHANNEL = "1438870244176171008";
undefined
>
> const client = new Client({
|   intents: [
|     GatewayIntentBits.Guilds,
|     GatewayIntentBits.GuildMessages,
|     GatewayIntentBits.MessageContent
|   ]
| });
Uncaught ReferenceError: Client is not defined
>
> client.on("ready", () => {
|   console.log(`ICAD Archive Bot is online as ${client.user.tag}`);
| });
Uncaught ReferenceError: client is not defined
>
> client.on("messageCreate", async (msg) => {
|   // Only relay messages from the ICAD log channel
|   if (msg.channel.id !== ICAD_CHANNEL) return;
|   if (!msg.author.bot) return; // Only relay ICAD bot messages
|
|   const archive = await client.channels.fetch(ARCHIVE_CHANNEL);
|
|   if (!archive) return console.log("Archive channel not found.");
|
|   // Copy embeds or plain text (ICAD usually uses embeds)
|   archive.send({
|     content: msg.content || null,
|     embeds: msg.embeds.length ? msg.embeds : []
|   });
| });
Uncaught ReferenceError: client is not defined
>
> client.login(BOT_TOKEN);