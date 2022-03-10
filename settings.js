const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "© Monster-Bot" //namabot kalian
global.ownername= "Monster-Bot" //nama kalian
global.myweb ="https://www.youtube.com/watch?v=dQw4w9WgXcQ" //bebas asal jan hapus
global.youtube = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" //bebas asal jan hapus
global.github = "https://zeeone-ofc.github.io/" //bebas
global.email = "zeeoneofc@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "595985770265" // nomor wa kalian
global.ownernomerr = "+595985770265" //nmr wa kalian
global.thumbnail = "./image/logobot.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["595985770265"] //ganti agar fitur owner bisa di gunakan
global.packname = '' //sticker wm ubah
global.author = '' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&fontname=Teko+Bold&&shadowType=0&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%2309bbde&fillColor2Color=%2309bbde&fillColor3Color=%2309bbde&fillColor4Color=%2309bbde&fillColor5Color=%2309bbde&fillColor6Color=%2309bbde&fillColor7Color=%2309bbde&fillColor8Color=%2309bbde&fillColor9Color=%2309bbde&fillColor10Color=%2309bbde&fillOutlineColor=%2309bbde&fillOutline2Color=%2309bbde&backgroundColor=%23000&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&fontname=Teko+Bold&&shadowType=0&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%2309bbde&fillColor2Color=%2309bbde&fillColor3Color=%2309bbde&fillColor4Color=%2309bbde&fillColor5Color=%2309bbde&fillColor6Color=%2309bbde&fillColor7Color=%2309bbde&fillColor8Color=%2309bbde&fillColor9Color=%2309bbde&fillColor10Color=%2309bbde&fillOutlineColor=%2309bbde&fillOutline2Color=%2309bbde&backgroundColor=%23000&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&fontname=Teko+Bold&&shadowType=0&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%2309bbde&fillColor2Color=%2309bbde&fillColor3Color=%2309bbde&fillColor4Color=%2309bbde&fillColor5Color=%2309bbde&fillColor6Color=%2309bbde&fillColor7Color=%2309bbde&fillColor8Color=%2309bbde&fillColor9Color=%2309bbde&fillColor10Color=%2309bbde&fillOutlineColor=%2309bbde&fillOutline2Color=%2309bbde&backgroundColor=%23000&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&fontname=Teko+Bold&&shadowType=0&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%2309bbde&fillColor2Color=%2309bbde&fillColor3Color=%2309bbde&fillColor4Color=%2309bbde&fillColor5Color=%2309bbde&fillColor6Color=%2309bbde&fillColor7Color=%2309bbde&fillColor8Color=%2309bbde&fillColor9Color=%2309bbde&fillColor10Color=%2309bbde&fillOutlineColor=%2309bbde&fillOutline2Color=%2309bbde&backgroundColor=%23000&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '´´´✅ Hecho´´´',
    admin: '´´´❌ Este comando solo puede ser utilizado por el administrador´´´',
    botAdmin: '´´´❌ Este comando solo se puede usar cuando el bot se convierta en administrador´´´',
    owner: '´´´❌ Este comando solo puede ser utilizado por el propietario´´´',
    group: '´´´❌ Este comando solo se puede usar en grupos´´´',
    private: '´´´❌ Este comando solo se puede usar en privado´´´',
	bot: '´´´❌ Funciones especiales del usuario del número de bot´´´',
    errtoimg: '´´´❌ Lo siento, actualmente no es compatible con Sticker Gif´´´',
    wait: '´´´⏳ Espere un momento...´´´',
	lockCmd: '´´´Funciones no activadas por el propietario´´´',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
