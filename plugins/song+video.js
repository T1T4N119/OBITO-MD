
const {cmd , commands} = require('../command')
const yts = require('yt-search');
const fg = require('api-dylux');

// -------- Song Download --------
cmd({
    pattern: 'song',
    desc: 'download songs',
    react: "🎶",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('*Please enter a query or a url !*');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*🎼 σвιтσ-м∂ ѕσηg ∂σωηℓσα∂єя . .⚙️*

🎼⚙️ 𝐓𝐈𝐓𝐋𝐄 - ${data.title}

🎼⚙️ 𝐕𝐈𝐄𝐖𝐒 - ${data.views}

🎼⚙️ 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍 - ${data.description}

🎼⚙️ 𝐓𝐈𝐌𝐄 - ${data.timestamp}

🎼⚙️ 𝐀𝐆𝐎 - ${data.ago}

*ʀᴇᴘʟʏ ᴛʜɪꜱ ᴍᴇꜱꜱᴀɢᴇ ᴡɪᴛʜ ᴏᴘᴛɪᴏɴ*

*1 Aᴜᴅɪᴏ Wɪᴛʜ Nᴏʀᴍᴀʟ Fᴏʀᴍᴀᴛ*
*2 Aᴜᴅɪᴏ Wɪᴛʜ Dᴏᴄᴜᴍᴇɴᴛ Fᴏʀᴍᴀᴛ*

> Pᴏᴡᴇʀᴇᴅ Bʏ Oʙɪᴛᴏ`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from, { audio: { url:downloadUrl }, caption: '> Pᴏᴡᴇʀᴇᴅ Bʏ Oʙɪᴛᴏ', mimetype: 'audio/mpeg'},{ quoted: mek });
                        break;
                    case '2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloaddocUrl }, caption: '> Pᴏᴡᴇʀᴇᴅ Bʏ Oʙɪᴛᴏ', mimetype: 'audio/mpeg', fileName:data.title + ".mp3"}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});


//==================== Video downloader =========================

cmd({
    pattern: 'video',
    desc: 'download videos',
    react: "📽️",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('*Please enter a query or a url !*');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*📽️ σвιтσ-м∂ νι∂єσ ∂σωηℓσα∂єя . .⚙️*

📽️⚙️ 𝐓𝐈𝐓𝐋𝐄 - ${data.title}

📽️⚙️ 𝐕𝐈𝐄𝐖𝐒 - ${data.views}

📽️⚙️ 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍 - ${data.description}

📽️⚙️ 𝐓𝐈𝐌𝐄 - ${data.timestamp}

📽️⚙️ 𝐀𝐆𝐎 - ${data.ago}

*ʀᴇᴘʟʏ ᴛʜɪꜱ ᴍᴇꜱꜱᴀɢᴇ ᴡɪᴛʜ ᴏᴘᴛɪᴏɴ*

*1 Vɪᴅᴇᴏ Wɪᴛʜ Nᴏʀᴍᴀʟ Fᴏʀᴍᴀᴛ*
*2 Vɪᴅᴇᴏ Wɪᴛʜ Dᴏᴄᴜᴍᴇɴᴛ Fᴏʀᴍᴀᴛ*

> Pᴏᴡᴇʀᴇᴅ Bʏ Oʙɪᴛᴏ`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let downvid = await fg.ytv(url);
                        let downloadvUrl = downvid.dl_url;
                        await conn.sendMessage(from, { video : { url:downloadvUrl }, caption: '> Pᴏᴡᴇʀᴇᴅ Bʏ Oʙɪᴛᴏ', mimetype: 'video/mp4'},{ quoted: mek });
                        break;
                    case '2':
                        let downviddoc = await fg.ytv(url);
                        let downloadvdocUrl = downviddoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloadvdocUrl }, caption: '> Pᴏᴡᴇʀᴇᴅ Bʏ Oʙɪᴛᴏ', mimetype: 'video/mp4', fileName:data.title + ".mp4" }, { quoted: mek });
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
 
