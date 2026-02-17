const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// ================================
// CONFIGURACIÓN DEL CLIENTE
// ================================
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const COMANDOS_PATH = path.join(__dirname, "comandos.json");

// ================================
// CARGA DE COMANDOS (CACHE)
// ================================
function cargarComandos() {
  try {
    const raw = fs.readFileSync(COMANDOS_PATH, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("❌ Error leyendo comandos.json:", err.message);
    return {};
  }
}

let comandos = cargarComandos();

// 🔄 Recargar comandos si cambia el archivo
fs.watch(COMANDOS_PATH, () => {
  console.log("🔄 comandos.json actualizado");
  comandos = cargarComandos();
});

// ================================
// EVENTOS DEL BOT
// ================================
client.once("ready", () => {
  console.log(`🤖 Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", async (msg) => {
  try {
    if (msg.author.bot) return;

    const contenido = msg.content.trim();
    if (!contenido) return;

    if (comandos[contenido]) {
      await msg.channel.send(comandos[contenido]);
    }
  } catch (err) {
    console.error("❌ Error procesando mensaje:", err);
  }
});

// ================================
// MANEJO DE ERRORES GLOBALES
// ================================
process.on("unhandledRejection", (reason) => {
  console.error("❌ Unhandled Rejection:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
});

// ================================
// EVENTOS DE CONEXIÓN DISCORD
// ================================
client.on("error", (error) => {
  console.error("❌ Error Discord:", error);
});

client.on("shardError", (error) => {
  console.error("❌ Shard Error:", error);
});

client.on("disconnect", () => {
  console.warn("⚠️ Bot desconectado de Discord");
});

client.on("reconnecting", () => {
  console.log("🔄 Reintentando conexión a Discord...");
});

// ================================
// LOGIN
// ================================
client.login(process.env.TOKEN);
