const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_56_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieTRmQnhQUDNWcXZ2aVZLdVZPZjlxTU9HL3Z4SXc1UHl3eFpqY1pPbS9YMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ05LRnNmdE5SWFNqSUtGekJTY2hiUVwiLFxuICBcInBob25lSWRcIjogXCJlYTBlMWVkMC0zMzJiLTQ3MzktYmM5Zi1kZjkwYzUwYTAyZWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMjMyLFxuICAgICAgOTMsXG4gICAgICAxMTIsXG4gICAgICA0NixcbiAgICAgIDE3MixcbiAgICAgIDEzNSxcbiAgICAgIDE0LFxuICAgICAgOTYsXG4gICAgICA2OSxcbiAgICAgIDE1NixcbiAgICAgIDIyNCxcbiAgICAgIDEyOSxcbiAgICAgIDE0LFxuICAgICAgMTgsXG4gICAgICAyMTksXG4gICAgICA2NyxcbiAgICAgIDE3MixcbiAgICAgIDYsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxNDUsXG4gICAgICA3OCxcbiAgICAgIDE1OCxcbiAgICAgIDEwOCxcbiAgICAgIDExNSxcbiAgICAgIDE5LFxuICAgICAgNjYsXG4gICAgICAyMTcsXG4gICAgICAxNjUsXG4gICAgICA5NyxcbiAgICAgIDY3LFxuICAgICAgMzMsXG4gICAgICA4MCxcbiAgICAgIDIwMixcbiAgICAgIDIsXG4gICAgICAxMzMsXG4gICAgICAyNDIsXG4gICAgICA1MCxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5ODdTTjNGOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjgzNTM1NDIyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIQVNTQU4gTFVIT1ZFUk9cIixcbiAgICBcImxpZFwiOiBcIjEwMzA3OTczNTI1NTIwMjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01lVW52SUZFSmpTbDdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicnFtNG1ZbUtFRkNmcENsb2RvZE9FNTlRWjZ5a2pLcklrdUVaUUgxV0xXMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVN21aKzhDQ2VsWC9IMkNhNFl5QWRtTXdwVzh4NWV1TjloM3NRaEptZU92T1NOS2JLQms5WGdIUVdyTEdVTzNZT0Q1bHpHc2I3bUtRRkRrOUVDVzhBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQTVNIZkdFak04TTB3aGpYNzYwSGs2b1lvc2hKL2hnc29DU0twdExLM2hEUGphenZmR2ZJcDdsbW1EVDhJK1BZQTBleDhKTDN2MjlBaFQyVTlSdlRoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2ODM1MzU0MjI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTM3NzU2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
