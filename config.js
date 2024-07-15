const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349020619432 ";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_31_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICAzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDc4LFxuICAgICAgICA0NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0LFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiektKUmRyNStnN0IzNTRZZ0sxZmVZQ2k4N2J6TGIvSk91Q0UvUGl4bUdsOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUmtZWFZVLWhUbGlMRFFxRWgyNms3Z1wiLFxuICBcInBob25lSWRcIjogXCIyMmEyOGY4OC0yZThkLTQyNTgtYTZhNC02YjU3NDAwYmMxMGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgNjEsXG4gICAgICAxOTgsXG4gICAgICAyNyxcbiAgICAgIDE0NixcbiAgICAgIDIwLFxuICAgICAgMzIsXG4gICAgICA0NSxcbiAgICAgIDE5MyxcbiAgICAgIDEwNyxcbiAgICAgIDEsXG4gICAgICA5OCxcbiAgICAgIDEwNCxcbiAgICAgIDEyNixcbiAgICAgIDM5LFxuICAgICAgMTYwLFxuICAgICAgMTM1LFxuICAgICAgMjIsXG4gICAgICA4MixcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDc1LFxuICAgICAgMTUsXG4gICAgICAyMDIsXG4gICAgICAyMjcsXG4gICAgICA1LFxuICAgICAgNTUsXG4gICAgICAyNCxcbiAgICAgIDEzNCxcbiAgICAgIDE0NSxcbiAgICAgIDMxLFxuICAgICAgMjUyLFxuICAgICAgNTYsXG4gICAgICAyMTQsXG4gICAgICAxNTUsXG4gICAgICA1NCxcbiAgICAgIDcxLFxuICAgICAgMTAxLFxuICAgICAgMjM1LFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlJXNjVXVk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjA2MTk0MzI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODQyMjUzMTU2Nzc5Nzo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmbG1aSUJFTnVkMWJRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUDJhaE9UcVJ1WitHQkhCdjdsdFRRTW1QTG1BcEF2UUUvdXJFRUNFWk9EYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwQk1UL2o1THBCYUlQSVJmT21lSFBpYzgrN0JqeHF2eXFyT2Z5S3Z3MHd4ZS9yVEcvNFRka0U2WWQ0dVE2WXF0ZFpzSjJ0ZmtCOWFvNnFBRGlIYUdEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2MVh5a01ySkFnNjdsVDM0WWpSZi9XQnhubXBSWXl4dXJ6ay9hektQZ1YxS3FXTzNYcGE4WlMyb3BZMHl0ZDdnZnNIWHNudSswZFlqSDdpdmpIQ0RoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIwNjE5NDMyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDYxMDg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVNpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNU2kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkWnBmWDd4cUlTU2lkQWRqaUFVdlVaZXF0bVovNVVsWWlGa0libkg0Q2VNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwNjYwNjc3NCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
