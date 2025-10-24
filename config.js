const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RISGdoTlpMN2dPMjJGeFFwQ3NLWSs1UVBLQ1hFR0tNQjV6S1oySDRHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakRRMjg0WTBockJFaFNKTkQ5aVNuU3MxNDBtcC91VUZMbzk1STFZQk1UTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQWl0R1JSdUM1WWd0Qm9OalpSOEpha01tVmVQOWQvaEgxVUxLbWJIVEZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdjlscDdYaS9RRE91VkZhaXZ5MStkUHhJVUNXUU1ML3M0MWRHL2tSUTNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdMWlVZOVdUQzB0dTBqVFFrRHBMdzFucnpXendZcHh6QWV1ZU1CQ1Nqa1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0xL1g0NWpGZkwrb0lJSzVBNGVTN2NYdldxL3BGTTVmRC93N244V29NWE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURWRHUwMzhJMXlWRjFDampyaDRjMDBTVUhNWEk3MkZ1MmlYMDdKYkFHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHRNTFFrTm5qcXRQbHU3NW5DSXFTTGRneGtEWjE0cENiTGhGc3FiaEcwdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhUT0w1M3J1bnMvbVdHc0xMc01DelRxTHhsWTFwNUJnbEhyN21tV21pZVhLTmZOYWhucTV2Z0ZsOWZYc2hrK0hpSFZndUZ0QkVJOUEyZDBjeVVUbkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiI2NWRWTmU5MElJM1FLTlVnRGEyenFpV0E5cDM4a0hZZkp5RmNTc3VZNVZBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ2ODQ2NzQ1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0I1MDE2RDhDMUFFMjg3REUyMjk5REFCNTBGREVFNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxMjk0NDgwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI0NFM0QldERSIsIm1lIjp7ImlkIjoiOTIzNDY4NDY3NDU2OjExQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTUxMzQ2NjYxNTY0NDgxOjExQGxpZCIsIm5hbWUiOiJNdWdoYWwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tTWjA2VUNFSXJ4N01jR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZkcHlmZVFWWm9aYlZxMks1N1E5eUdsR2E2bHdCbTY5Yll6a0svRXpFaTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxDaklIcG13cFUrWE56NzM1dkJxTnpra2t4cjdWcTNqZGszU2tMbjRQQkxGZVRicjQvb0duRzdacloxR2RaK2pmZmN4azVnWG1IRFdsaGpmUUNKS0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6WkxGOGFOYUJBRndxc2tScXJVdDRPaER2aGdkaEZLcHE1aEpUQ0dvMWZiMDhMMFlKLzhiZXg2OXA0aEErd05tdFA5dStUelAzODk5WkV2ME1ZMW1Edz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ2ODQ2NzQ1NjoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiM2FjbjNrRldhR1cxYXRpdWUwUGNocFJtdXBjQVp1dlcyTTVDdnhNeEl0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjEyOTQ0NzcsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmY3In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Mughal-KING𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.imghippo.com/files/hJFA9704ByQ.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "Mughal KING",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mughal-KING",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923468467456",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Mughal-KING",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mughal-KING*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imghippo.com/files/hJFA9704ByQ.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923468467456",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
