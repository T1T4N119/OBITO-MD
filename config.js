const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/LDh4QwTW",
SESSION_ID: process.env.SESSION_ID || "wIgCQYyb#YNcuJfMYMR8rJgLC4BcLYLnqT1DkZsZs2hKNSQaxfJc"
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃𝐎𝐛𝐢𝐭𝐨-𝐌𝐃 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐎𝐁𝐈𝐓𝐎",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
