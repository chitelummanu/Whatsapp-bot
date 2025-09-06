// index.js
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize client with local auth to save session
const client = new Client({
    authStrategy: new LocalAuth()
});

// Display QR code in terminal for login
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scan this QR code with WhatsApp');
});

// Bot is ready
client.on('ready', () => {
    console.log('💖 Your WhatsApp bot is ready!');
});

// Listen for messages
client.on('message', message => {
    const msg = message.body.toLowerCase();

    // Greetings
    if (msg.includes('hi') || msg.includes('hello')) {
        message.reply('Hello🌸');
    }

    // Ask about products
    else if (msg.includes('what do you sell')) {
        message.reply(`✨ Our products: 
- Scrunchies
- Lip oil
- Lip gloss
- Headband
- Sheet masks

Any requests? 😘`);
    }

    // Ask about prices
    else if (msg.includes('how much') || msg.includes('price')) {
        message.reply(`💰 Prices:
- Scrunchies - ₦500
- Lip oil - ₦1800
- Lip gloss - ₦1800
- Headband - ₦600
- Sheet masks - ₦600`);
    }

    // Fun responses
    else if (msg.includes('bye')) {
        message.reply('Bye bye 🌸💖');
    }
    else if (msg.includes('thank')) {
        message.reply('You’re welcome! 🌸');
    }

    // Default cute response
    else {
        message.reply('🌸 Ooh! Tell me more~ 💖');
    }
});

// Start client
client.initialize();

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Bot is alive!"));
app.listen(3000, () => console.log("Server is running"));

client.on('message', message => {
    if (message.from.includes('-')) return; // ignores groups
    // handle personal messages
});
