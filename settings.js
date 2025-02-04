const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//👉 Put Your Session Id 🐣 👈කියන එක කපලා අයින් කරලා ඔයාගේ Session id එක දාන්න.

SESSION_ID: process.env.SESSION_ID || "LAKA-MD=5g431AAY#fbhqaYByb-faq25Fu_cUXqDP6nYUd_L7Xgsgcg7V_kg",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`> MAMA BALUVA MAGETH BALANNA`*",


//=================================================
//මෙවා defult එවා කැමතිනම් false and true විතරක් වෙනස් කරගන්න..✨
//නැත්තම් bot deploy කරහම .settings comade එක use කරලත් වෙනස් කරගන්න පුලුවන්..🎊

PREFIX: process.env.PREFIX || '.' ,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94770080582' : process.env.OWNER_NUMBER,
MODE: process.env.MODE === undefined ?"praivet" : process.env.MODE,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "true" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "true" : process.env.AUTO_REPLY,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "true" : process.env.AUTO_STICKER,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS === undefined ? "true" : process.env.AUTO_REACT_STATUS,
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY === undefined ? "true" : process.env.AUTO_STATUS_REPLY,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "false" : process.env.ANTI_LINK,
AUTO_BLOCK: process.env.AUTO_BLOCK === undefined ? "false" : process.env.AUTO_BLOCK,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "false" : process.env.ANTI_BOT,
ALLWAYS_OFFLINE: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
READ_MESSAGE: process.env.READ_MESSAGE === undefined ? "false" : process.env.READ_MESSAGE,
READ_CMD: process.env.READ_CMD === undefined ? "false" : process.env.READ_CMD,
ALWAYS_RECORDING: process.env.ALWAYS_RECORDING === undefined ? "true" : process.env.ALWAYS_RECORDING,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "true" : process.env.AUTO_REACT,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,
AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
ANTI_CALL: process.env.ANTI_CALL === undefined ? "false" : process.env.ANTI_CALL,
ALWAYS_TYPING: process.env.ALWAYS_TYPING === undefined ? "true" : process.env.ALWAYS_TYPING,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
