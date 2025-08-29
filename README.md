# WhatsApp Bot using Baileys

This is a simple WhatsApp Bot made with [Baileys](https://github.com/WhiskeySockets/Baileys).

---

## ⚙️ Requirements
- Node.js (v18 or higher recommended, works in Termux / Linux / Replit)
- npm (comes with Node.js)
- Internet connection
- WhatsApp account (for scanning QR)

---

## 📥 Installation & Setup

### 🔹 Termux / Linux

1. **Update packages:**
   ```bash
   pkg update && pkg upgrade -y
   pkg install nodejs git -y

   mkdir whatsapp-bot
cd whatsapp-bot

nano package.json


cd ~/whatsapp-bot
rm -rf node_modules package-lock.json
npm install
node index.js


