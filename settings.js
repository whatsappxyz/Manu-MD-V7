//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Manul Official Tech" //ur yt chanel name
global.socialm = "GitHub: manulofficial7" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Manu-MD V7' //ur bot name
global.ownernumber = ['94742274855'] //ur owner number, dont add more than one
global.ownername = '⚖️𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥👨‍💻' //ur owner name
global.websitex = "https://www.youtube.com/@ManulOfficialTech"
global.wagc = "https://whatsapp.com/channel/0029VaN1XMn2ZjCsu9eZQP3R"
global.themeemoji = '🪀'
global.wm = "Manul Ofc Bot Inc."
global.botscript = 'https://github.com/samsungdew/Manu-MD-V7' //script link
global.packname = "Sticker By"
global.author = "⚖️𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥👨‍💻\n\n+94742274855"
global.creator = "94742274855@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["94742274855"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
