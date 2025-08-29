const { default: makeWASocket, useMultiFileAuthState, Browsers } = require("@whiskeysockets/baileys")
const qrcode = require("qrcode-terminal")

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("./auth_info")

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,  // QR terminal me show hoga
        browser: Browsers.macOS("Desktop")
    })

    sock.ev.on("creds.update", saveCreds)

    sock.ev.on("connection.update", (update) => {
        const { connection, qr } = update

        if (qr) {
            qrcode.generate(qr, { small: true })
            console.log("📱 Scan this QR from WhatsApp (Linked Devices)")
        }

        if (connection === "open") {
            console.log("✅ Bot connected successfully!")
        }

        if (connection === "close") {
            console.log("❌ Connection closed, retrying...")
            startBot()
        }
    })
}

startBot()
      
