const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "ISI APIKEY LU AMBIL DI OPENAI.COM" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'V19', // ISI APIKEY LU
}

global.namabot = "FramzGalbut" // UBAH JADI NAMA LU
global.namaowner = "Framzz" // NAMA OWNER
global.footer_text = "© Framzz BOTZ" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/allmenubot.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['62881038017683'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.fakelink = "https://tinnz.me/" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/DilAplHr8eo42u0Ote9LVQ`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = false // BEBAS
global.autorespon = false // BEBAS
global.onlyprem = true // BEBAS
global.onlygrub = true // BEBAS
global.onlypc = false // BEBAS
// - \\
// PEMISAH \\
global.packname = '© SANZTA BOTZ' //sticker wm ubah
global.author = 'Di Buat Oleh SANZTA BOTZ' //sticker wm ganti nama kalian

// BUG MENU \\
global.jumlah = "5"
global.audionya = fs.readFileSync("./sound.mp3")

// 
global.musicmenu = "./RANDOM/MUSIC/menu.mp3"

global.caption_pay = `Qris All Pay
Ovo :
Dana : 
Gopay :
`

global.ytname = "FRAMZ BOTZ"
global.socialm = "INSTA: @framzzyprm"
global.location = "Indonesia, Tanggerang, Banten"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
