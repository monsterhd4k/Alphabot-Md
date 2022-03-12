exports.private = () =>{
	return`⚠️  𝙇𝙖 𝙛𝙪𝙣𝙘𝙞𝙤𝙣 𝙨𝙤𝙡𝙤 𝙨𝙚 𝙥𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙣 𝙚𝙡 𝙘𝙝𝙖𝙩 𝙥𝙧𝙞𝙫𝙖𝙙𝙤`
	}
exports.wait = () => {
    return `⏳  𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...`
}
exports.ok = () => {
    return `✅  𝙃𝙚𝙘𝙝𝙤`
}

exports.err = () => {
    return `❌  𝙀𝙧𝙧𝙤𝙧`
}
exports.erorLink = () => {
    return `❌  𝙀𝙣𝙡𝙖𝙘𝙚 𝙄𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤`
}
exports.media = () => {
    return `𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝙡𝙤𝙨 𝙢𝙚𝙙𝙞𝙤𝙨 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧`
}
exports.replyImg = (prefix, command) => {
    return `𝙀𝙣𝙫𝙞𝙖𝙧/𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙛𝙤𝙩𝙤 𝙘𝙤𝙣 ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `❌ 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤, 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙫𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙘𝙤𝙢𝙤 𝙪𝙨𝙖𝙧 𝙚𝙣 *${prefix}allmenu*`
}

exports.emptyMess = () => {
    return `❌𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❌ 𝙀𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 *${cmd}* 𝙣𝙤 𝙚𝙨𝙩𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 𝙚𝙣 *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❌ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙨 𝙨𝙤𝙡𝙤 𝙥𝙖𝙧𝙖 𝙚𝙡 𝙙𝙪𝙚ñ𝙤!`
}

exports.doneOwner = () => {
    return `✅ 𝙃𝙚𝙘𝙝𝙤`
}

exports.groupOnly = () => {
    return `❌ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙨𝙚 𝙥𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙣 𝙜𝙧𝙪𝙥𝙤𝙨`
}

exports.adminOnly = () => {
    return `❌ 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙥𝙤𝙧 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤`
}

exports.nhFalse = () => {
    return `❌ 𝘾𝙤𝙙𝙞𝙜𝙤 𝙞𝙣𝙫𝙖𝙡𝙞𝙙𝙤`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 LISTA DE BANEADOS 」 ──*
    
Total : *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❌ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙤 𝙚𝙨 𝙪𝙣 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧`
}

exports.adminAlready = () => {
    return `❌ 𝙉𝙤 𝙨𝙚 𝙥𝙪𝙚𝙙𝙚 𝙥𝙧𝙤𝙢𝙤𝙘𝙞𝙤𝙣𝙖𝙧 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧`
}

exports.botNotAdmin = () => {
    return `❌ 𝘿𝙚𝙗𝙚𝙨 𝙝𝙖𝙘𝙚𝙧 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧 𝙖𝙡 𝙗𝙤𝙩 𝙥𝙧𝙞𝙢𝙚𝙧𝙤`
}

exports.received = (pushname) => {
    return `
Hola👋🏻 ${pushname}!
Gracias por informar, pronto recibiremos su informe`
}

exports.videoLimit = () => {
    return `❌ 𝙀𝙡 𝙩𝙖𝙢𝙖ñ𝙤 𝙙𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙚𝙨 𝙙𝙚𝙢𝙖𝙨𝙞𝙖𝙙𝙤 𝙜𝙧𝙖𝙣𝙙𝙚`
}

exports.notNum = (q) => {
    return `"${q}", no es un numero!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hola *${pushname}* 👋🏻 
	
👨🏻‍💻 Este es un bot para Whatsapp Beta para múltiples dispositivos.

📡 Version: 5.0.0 - Public Edition
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `Hola *${pushname}* 👋🏻

*© Monster-Bot*
*Version: 5.0.0*


 *『 Informacion del Bot 』* 
➣ ${prefix}owner
➣ ${prefix}rules
➣ ${prefix}sc
➣ ${prefix}ping
➣ ${prefix}runtime
➣ ${prefix}botstatus
➣ ${prefix}donate


 *『 Dueño 』* 
➣ < evaluate
➣ > evaluate
➣ $ exec
➣ => exec
➣ ${prefix}setmenu [texto]
➣ ${prefix}setmenu templateLocation
➣ ${prefix}setmenu templateTenor
➣ ${prefix}setmenu katalog
➣ ${prefix}setmenu katalog2
➣ ${prefix}setmenu list
➣ ${prefix}setwm [nombre|autor]
➣ ${prefix}sendsesi
➣ ${prefix}listpc
➣ ${prefix}listgc
➣ ${prefix}broadcast [texto]
➣ ${prefix}bc [texto]
➣ ${prefix}bcgc [texto]
➣ ${prefix}nsfw [on/off]
➣ ${prefix}autorespond [on/off]
➣ ${prefix}antiviewonce [on/off]
➣ ${prefix}join [link]
➣ ${prefix}self
➣ ${prefix}public [solo el bot]
➣ ${prefix}del [responde a mensaje del bot]
➣ ${prefix}setppbot [responde a imagen]


 *『 Menu de Grupo 』* 
➣ ${prefix}listonline
➣ ${prefix}sider
➣ ${prefix}wm [nombre|autor]
➣ ${prefix}infochat
➣ ${prefix}setdesk [texto]
➣ ${prefix}setppgrup [responde a imagen]
➣ ${prefix}antilink [on/off]
➣ ${prefix}revoke
➣ ${prefix}leave
➣ ${prefix}add [numero]
➣ ${prefix}kick [@usuario]
➣ ${prefix}leave
➣ ${prefix}linkgc
➣ ${prefix}take [nombre|autor]
➣ ${prefix}group [abrir/cerrar]
➣ ${prefix}tagall [texto]
➣ ${prefix}hidetag [texto]


 *『 Menu de Anime 』* 
➣ ${prefix}quotesanime
➣ ${prefix}anime [titulo]
➣ ${prefix}manga [titulo]
➣ ${prefix}character [titulo]


 *『  Menu de Tag 』* 
➣ ${prefix}stickertag
➣ ${prefix}videotag [titulo]
➣ ${prefix}vntag [titulo]
➣ ${prefix}imagetag [titulo]


 *『 Menu Stalkear 』* 
➣ ${prefix}igstalk [usuario]
➣ ${prefix}ghstalk [usuario]
➣ ${prefix}ytstalk [usuario]


 *『 Menu de Busqueda 』* 
➣ ${prefix}ytsearch [titulo]
➣ ${prefix}wallpaper [titulo]
➣ ${prefix}wikimedia [titulo]
➣ ${prefix}hentai
➣ ${prefix}wattpad [titulo]
➣ ${prefix}webtoons [titulo]
➣ ${prefix}drakor [titulo]
➣ ${prefix}pinterest [titulo]


 *『 Menu de Conversion 」*
➣ ${prefix}toaudio [video]
➣ ${prefix}tomp3 [video]
➣ ${prefix}tovn [video]
➣ ${prefix}stiker [responde a imagen]
➣ ${prefix}tourl [imagen/video/sticker]
➣ ${prefix}togif [sticker]
➣ ${prefix}tomp4 [sticker]
➣ ${prefix}toimg [responde a sticker]


*『 Efecto de Imagenes 』* 
➣ ${prefix}wanted [responde a imagen]
➣ ${prefix}utatoo [responde a imagen]
➣ ${prefix}unsharpen [responde a imagen]
➣ ${prefix}thanos [responde a imagen]
➣ ${prefix}sniper [responde a imagen]
➣ ${prefix}sharpen [responde a imagen]
➣ ${prefix}sepia [responde a imagen]
➣ ${prefix}scary [responde a imagen]
➣ ${prefix}rip [responde a imagen]
➣ ${prefix}redple [responde a imagen]
➣ ${prefix}rejected [responde a imagen]
➣ ${prefix}posterize [responde a imagen]
➣ ${prefix}ps4 [responde a imagen]
➣ ${prefix}pixelize [responde a imagen]
➣ ${prefix}missionpassed [responde a imagen]
➣ ${prefix}moustache [responde a imagen]
➣ ${prefix}lookwhatkarenhave [responde a imagen]
➣ ${prefix}jail [responde a imagen]
➣ ${prefix}invert [responde a imagen]
➣ ${prefix}instagram [responde a imagen]
➣ ${prefix}greyscale [responde a imagen]
➣ ${prefix}glitch [responde a imagen]
➣ ${prefix}gay [responde a imagen]
➣ ${prefix}frame [responde a imagen]
➣ ${prefix}fire [responde a imagen]
➣ ${prefix}distort [responde a imagen]
➣ ${prefix}dictator [responde a imagen]
➣ ${prefix}deepfry [responde a imagen]
➣ ${prefix}ddungeon [responde a imagen]
➣ ${prefix}circle [responde a imagen]
➣ ${prefix}challenger [responde a imagen]
➣ ${prefix}burn [responde a imagen]
➣ ${prefix}brazzers [responde a imagen]
➣ ${prefix}beautiful [responde a imagen]


 *『 Efectos de Sticker 』* 
➣ ${prefix}jail [responde a imagen]
➣ ${prefix}red [responde a imagen]
➣ ${prefix}gay [responde a imagen]
➣ ${prefix}bloo [responde a imagen]
➣ ${prefix}blue [responde a imagen]
➣ ${prefix}sepia [responde a imagen]
➣ ${prefix}green [responde a imagen]
➣ ${prefix}glass [responde a imagen]
➣ ${prefix}invert [responde a imagen]
➣ ${prefix}blurple [responde a imagen]
➣ ${prefix}blurple2 [responde a imagen]
➣ ${prefix}wasted [responde a imagen]
➣ ${prefix}passed [responde a imagen]
➣ ${prefix}triggered [responde a imagen]
➣ ${prefix}comrade [responde a imagen]
➣ ${prefix}greyscale [responde a imagen]
➣ ${prefix}threshold [responde a imagen]
➣ ${prefix}brightness [responde a imagen]
➣ ${prefix}invertgreyscale [responde a imagen]


 *『 Menu de Descargas 』* 
➣ ${prefix}tiktok [link]
➣ ${prefix}tiktoknowm [link]
➣ ${prefix}tiktokwm [link]
➣ ${prefix}tiktokaudio [link]
➣ ${prefix}ytdl [link]
➣ ${prefix}play [query]
➣ ${prefix}ytmp3 [link]
➣ ${prefix}ytshortmp3 [link]
➣ ${prefix}ytmp4 [link]
➣ ${prefix}ytshorts [link]
➣ ${prefix}facebook [link]
➣ ${prefix}facebooksd [link]
➣ ${prefix}facebookhd [link]
➣ ${prefix}fbaudio [link]
➣ ${prefix}igstory [usuario]
➣ ${prefix}igdl [link]
➣ ${prefix}igphoto [link]
➣ ${prefix}igvideo [link]
➣ ${prefix}igreels [link]
➣ ${prefix}igtv [link]
➣ ${prefix}soundcloud [link]
➣ ${prefix}gitclone [link repositorio]
➣ ${prefix}gitrepo [usuario repositorio branch]
➣ ${prefix}mediafire [link]
➣ ${prefix}twitter [link]


 *『 Anime Random 」*
➣ ${prefix}loli
➣ ${prefix}neko
➣ ${prefix}waifu
➣ ${prefix}shinobu
➣ ${prefix}megumin
➣ ${prefix}bully
➣ ${prefix}cuddle
➣ ${prefix}cry
➣ ${prefix}hug
➣ ${prefix}awoo
➣ ${prefix}kiss
➣ ${prefix}lick
➣ ${prefix}pat
➣ ${prefix}smug
➣ ${prefix}bonk
➣ ${prefix}yeet
➣ ${prefix}blush
➣ ${prefix}smile
➣ ${prefix}wave
➣ ${prefix}highfive
➣ ${prefix}handhold
➣ ${prefix}nom
➣ ${prefix}bite
➣ ${prefix}glomp
➣ ${prefix}slap
➣ ${prefix}kill
➣ ${prefix}happy
➣ ${prefix}wink
➣ ${prefix}poke
➣ ${prefix}dance
➣ ${prefix}cringe


 *『 Menu NSFW/+18 」*
➣ ${prefix}ahegao
➣ ${prefix}ass
➣ ${prefix}bdsm
➣ ${prefix}blowjob
➣ ${prefix}cuckold
➣ ${prefix}cum
➣ ${prefix}ero
➣ ${prefix}femdom
➣ ${prefix}foot
➣ ${prefix}gangbang
➣ ${prefix}glasses
➣ ${prefix}jahy
➣ ${prefix}manga
➣ ${prefix}masturbation
➣ ${prefix}neko
➣ ${prefix}orgy
➣ ${prefix}panties
➣ ${prefix}pussy
➣ ${prefix}tentacles
➣ ${prefix}thighs
➣ ${prefix}yuri
➣ ${prefix}feet
➣ ${prefix}lewdkemo
➣ ${prefix}woof
➣ ${prefix}gasm
➣ ${prefix}solo
➣ ${prefix}8ball
➣ ${prefix}goose
➣ ${prefix}avatar
➣ ${prefix}hololewd
➣ ${prefix}gecg
➣ ${prefix}holo
➣ ${prefix}fox_girl
➣ ${prefix}tits
➣ ${prefix}eroyuri
➣ ${prefix}holoyero
➣ ${prefix}lizard
➣ ${prefix}keta
➣ ${prefix}eron
➣ ${prefix}erok
➣ ${prefix}kemonomimi
➣ ${prefix}cum_jpg
➣ ${prefix}nsfw_avatar
➣ ${prefix}erofeet
➣ ${prefix}meow
➣ ${prefix}wallpaper
➣ ${prefix}waifu
➣ ${prefix}trap
➣ ${prefix}lewd
➣ ${prefix}pussy_jpg
➣ ${prefix}futanari
➣ ${prefix}lewdk
➣ ${prefix}solog
➣ ${prefix}smug
➣ ${prefix}cum
➣ ${prefix}slap
➣ ${prefix}les
➣ ${prefix}erokemo
➣ ${prefix}bj
➣ ${prefix}pwankg
➣ ${prefix}pat
➣ ${prefix}poke
➣ ${prefix}feed
➣ ${prefix}nsfw_neko_gif
➣ ${prefix}pussy
➣ ${prefix}feetg
➣ ${prefix}baka
➣ ${prefix}hug
➣ ${prefix}kiss
➣ ${prefix}tickle
➣ ${prefix}spank
➣ ${prefix}kuni
➣ ${prefix}classic
➣ ${prefix}boobs
➣ ${prefix}anal
➣ ${prefix}ngif
➣ ${prefix}cuddle
➣ ${prefix}zettai


 *『 Menu TextPro 」*
➣ ${prefix}halloween2 [texto1|texto2]
➣ ${prefix}horror [texto1|texto2]
➣ ${prefix}game8bit [texto1|texto2]
➣ ${prefix}layered [texto1|texto2]
➣ ${prefix}glitch2 [texto1|texto2]
➣ ${prefix}coolg [texto1|texto2]
➣ ${prefix}coolwg [texto1|texto2]
➣ ${prefix}realistic [texto1|texto2]
➣ ${prefix}space3d [texto1|texto2]
➣ ${prefix}gtiktok [texto1|texto2]
➣ ${prefix}stone [texto1|texto2]
➣ ${prefix}marvel [texto1|texto2]
➣ ${prefix}marvel2 [texto1|texto2]
➣ ${prefix}pornhub [texto1|texto2]
➣ ${prefix}avengers [texto1|texto2]
➣ ${prefix}metalr [texto1|texto2]
➣ ${prefix}metalg [texto1|texto2]
➣ ${prefix}metalg2 [texto1|texto2]
➣ ${prefix}halloween2 [texto1|texto2]
➣ ${prefix}lion [texto1|texto2]
➣ ${prefix}wolf_bw [texto1|texto2]
➣ ${prefix}wolf_g [texto1|texto2]
➣ ${prefix}ninja [texto1|texto2]
➣ ${prefix}3dsteel [texto1|texto2]
➣ ${prefix}horror2 [texto1|texto2]
➣ ${prefix}lava [texto1|texto2]
➣ ${prefix}bagel [texto1|texto2]
➣ ${prefix}blackpink [texto]
➣ ${prefix}rainbow2 [texto]
➣ ${prefix}water_pipe [texto]
➣ ${prefix}halloween [texto]
➣ ${prefix}sketch [texto]
➣ ${prefix}sircuit [texto]
➣ ${prefix}discovery [texto]
➣ ${prefix}metallic2 [texto]
➣ ${prefix}fiction [texto]
➣ ${prefix}demon [texto]
➣ ${prefix}transformer [texto]
➣ ${prefix}berry [texto]
➣ ${prefix}thunder [texto]
➣ ${prefix}magma [texto]
➣ ${prefix}3dstone [texto]
➣ ${prefix}neon [texto]
➣ ${prefix}glitch [texto]
➣ ${prefix}harry_potter [texto]
➣ ${prefix}embossed [texto]
➣ ${prefix}broken [texto]
➣ ${prefix}papercut [texto]
➣ ${prefix}gradient [texto]
➣ ${prefix}glossy [texto]
➣ ${prefix}watercolor [texto]
➣ ${prefix}multicolor [texto]
➣ ${prefix}neon_devil [texto]
➣ ${prefix}underwater [texto]
➣ ${prefix}bear [texto]
➣ ${prefix}wonderfulg [texto]
➣ ${prefix}christmas [texto]
➣ ${prefix}neon_light [texto]
➣ ${prefix}snow [texto]
➣ ${prefix}cloudsky [texto]
➣ ${prefix}luxury2 [texto]
➣ ${prefix}gradient2 [texto]
➣ ${prefix}summer [texto]
➣ ${prefix}writing [texto]
➣ ${prefix}engraved [texto]
➣ ${prefix}summery [texto]
➣ ${prefix}3dglue [texto]
➣ ${prefix}metaldark [texto]
➣ ${prefix}neonlight [texto]
➣ ${prefix}oscar [texto]
➣ ${prefix}minion [texto]
➣ ${prefix}holographic [texto]
➣ ${prefix}purple [texto]
➣ ${prefix}glossyb [texto]
➣ ${prefix}deluxe2 [texto]
➣ ${prefix}glossyc [texto]
➣ ${prefix}fabric [texto]
➣ ${prefix}neonc [texto]
➣ ${prefix}newyear [texto]
➣ ${prefix}newyear2 [texto]
➣ ${prefix}metals [texto]
➣ ${prefix}xmas [texto]
➣ ${prefix}blood [texto]
➣ ${prefix}darkg [texto]
➣ ${prefix}joker [texto]
➣ ${prefix}wicker [texto]
➣ ${prefix}natural [texto]
➣ ${prefix}firework [texto]
➣ ${prefix}skeleton [texto]
➣ ${prefix}balloon [texto]
➣ ${prefix}balloon2 [texto]
➣ ${prefix}balloon3 [texto]
➣ ${prefix}balloon4 [texto]
➣ ${prefix}balloon5 [texto]
➣ ${prefix}balloon6 [texto]
➣ ${prefix}balloon7 [texto]
➣ ${prefix}steel [texto]
➣ ${prefix}gloss [texto]
➣ ${prefix}denim [texto]
➣ ${prefix}decorate [texto]
➣ ${prefix}decorate2 [texto]
➣ ${prefix}peridot [texto]
➣ ${prefix}rock [texto]
➣ ${prefix}glass [texto]
➣ ${prefix}glass2 [texto]
➣ ${prefix}glass3 [texto]
➣ ${prefix}glass4 [texto]
➣ ${prefix}glass5 [texto]
➣ ${prefix}glass6 [texto]
➣ ${prefix}glass7 [texto]
➣ ${prefix}glass8 [texto]
➣ ${prefix}captain_as2 [texto]
➣ ${prefix}robot [texto]
➣ ${prefix}equalizer [texto]
➣ ${prefix}toxic [texto]
➣ ${prefix}sparkling [texto]
➣ ${prefix}sparkling2 [texto]
➣ ${prefix}sparkling3 [texto]
➣ ${prefix}sparkling4 [texto]
➣ ${prefix}sparkling5 [texto]
➣ ${prefix}sparkling6 [texto]
➣ ${prefix}sparkling7 [texto]
➣ ${prefix}decorative [texto]
➣ ${prefix}chocolate [texto]
➣ ${prefix}strawberry [texto]
➣ ${prefix}koifish [texto]
➣ ${prefix}bread [texto]
➣ ${prefix}matrix [texto]
➣ ${prefix}blood2 [texto]
➣ ${prefix}neonligth2 [texto]
➣ ${prefix}thunder2 [texto]
➣ ${prefix}3dbox [texto]
➣ ${prefix}neon2 [texto]
➣ ${prefix}roadw [texto]
➣ ${prefix}bokeh [texto]
➣ ${prefix}gneon [texto]
➣ ${prefix}advanced [texto]
➣ ${prefix}dropwater [texto]
➣ ${prefix}wall [texto]
➣ ${prefix}chrismast [texto]
➣ ${prefix}honey [texto]
➣ ${prefix}drug [texto]
➣ ${prefix}marble [texto]
➣ ${prefix}marble2 [texto]
➣ ${prefix}ice [texto]
➣ ${prefix}juice [texto]
➣ ${prefix}rusty [texto]
➣ ${prefix}abstra [texto]
➣ ${prefix}biscuit [texto]
➣ ${prefix}wood [texto]
➣ ${prefix}scifi [texto]
➣ ${prefix}metalr [texto]
➣ ${prefix}purpleg [texto]
➣ ${prefix}shiny [texto] 
➣ ${prefix}jewelry [texto]
➣ ${prefix}jewelry2 [texto]
➣ ${prefix}jewelry3 [texto]
➣ ${prefix}jewelry4 [texto]
➣ ${prefix}jewelry5 [texto]
➣ ${prefix}jewelry6 [texto]
➣ ${prefix}jewelry7 [texto]
➣ ${prefix}jewelry8 [texto]
➣ ${prefix}metalh [texto]
➣ ${prefix}golden [texto]
➣ ${prefix}glitter [texto]
➣ ${prefix}glitter2 [texto]
➣ ${prefix}glitter3 [texto]
➣ ${prefix}glitter4 [texto]
➣ ${prefix}glitter5 [texto]
➣ ${prefix}glitter6 [texto]
➣ ${prefix}glitter7 [texto]
➣ ${prefix}metale [texto]
➣ ${prefix}carbon [texto]
➣ ${prefix}candy [texto]
➣ ${prefix}metalb [texto]
➣ ${prefix}gemb [texto]
➣ ${prefix}3dchrome [texto]
➣ ${prefix}metalb2 [texto]
➣ ${prefix}metalg [texto]
➣ ${prefix}metalg [texto]


 *『 Otros 」*
➣ ${prefix}afk [razon]
➣ ${prefix}translate kode_bahasa [texto]
➣ ${prefix}kalkulator [texto]
➣ ${prefix}smeme [texto]
➣ ${prefix}smeme2 [texto1|texto2]
➣ ${prefix}memegen [texto1|texto2]
    `
}

exports.rules = (prefix) => {
    return `
*── 『 REGLAS Y INFORMACION 』 ──*
1. No spamear al bot.
Sancion: *❌ ADVERTENCIA/BLOQUEO*
2. No llamar al bot.
Sancion: *❌ BLOQUEO*
3. No explotar al bot.
Sancion: *❌ BLOQUEO PERMANENTE*
🗯️ ¿Porque el bot es lento a veces?
➡️ Puede verse afectado por la red, la señal, prohibido por Whatsapp y alguna otra razón.
🗯️ ¿Dónde puedo obtener el script de este bot?
➡️ Este script aún es privado y nunca se ha comercializado, tenga cuidado al conocer a los estafadores.
🗯️ ¿Puedo agregar el bot a mi grupo?
➡️ Por el momento el bot es de libre uso.
🗯️ ¿Cuál es el prefijo?
➡️ Este bot usa múltiples prefijos. Eso significa que puede usar el prefijo "#" "." y otro prefijo razonable.
Si comprende las reglas, escriba *.allmenu* para comenzar.
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
╭ 𝖭𝖺𝗆𝖺 :
├ 𝖴𝗆𝗎𝗋 :
├ 𝖦𝖾𝗇𝖽𝖾𝗋 :
├ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*── 『 DONACION 』 ──*

Hola!

Puedes ayudarme a mantener este bot actualizado mediante una donación

Cualquier cantidad de tu donación significará mucho. 👍🏻

¡Gracias!

Persona de contacto Titular:
https://wa.me/+6285878313791

    `
}

exports.info = (prefix) =>{
	return`
» ${prefix}owner
» ${prefix}rules
» ${prefix}sc
» ${prefix}ping
» ${prefix}runtime
» ${prefix}botstatus
» ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`
» < evaluate
» > evaluate
» $ exec
» => exec
» ${prefix}setmenu [texto]
» ${prefix}setmenu templateLocation
» ${prefix}setmenu templateTenor
» ${prefix}setmenu katalog
» ${prefix}setmenu katalog2
» ${prefix}setmenu list
» ${prefix}setwm [nombre|autor]
» ${prefix}sendsesi
» ${prefix}listpc
» ${prefix}listgc
» ${prefix}broadcast [texto]
» ${prefix}bc [texto]
» ${prefix}bcgc [texto]
» ${prefix}nsfw [on/off]
» ${prefix}autorespond [on/off]
» ${prefix}antiviewonce [on/off]
» ${prefix}join [link]
» ${prefix}self
» ${prefix}public [solo el bot]
» ${prefix}del [responde a mensaje del bot]
» ${prefix}setppbot [responde a imagen]
`}

exports.database = (prefix) =>{
	return`
» ${prefix}setcmd [responde a sticker]
» ${prefix}delcmd [responde a sticker]
» ${prefix}listcmd
» ${prefix}absen
» ${prefix}cekabsen
» ${prefix}deleteabsen
» ${prefix}absenstart
» ${prefix}addmsg [nombre]
» ${prefix}getmsg [nombre]
» ${prefix}listmsg
» ${prefix}delmsg [nombre]
`}

exports.group = (prefix) =>{
	return`
» ${prefix}listonline
» ${prefix}sider
» ${prefix}wm [nombre|autor]
» ${prefix}infochat
» ${prefix}setdesk [texto]
» ${prefix}setppgrup [responde a imagen]
» ${prefix}antilink [on/off]
» ${prefix}revoke
» ${prefix}leave
» ${prefix}add [numero]
» ${prefix}kick [@usuario]
» ${prefix}leave
» ${prefix}linkgc
» ${prefix}take [nombre|autor]
» ${prefix}group [abrir/cerrar]
» ${prefix}tagall [texto]
» ${prefix}hidetag [texto]
`}

exports.anime = (prefix) =>{
	return`
» ${prefix}quotesanime
» ${prefix}anime [titulo]
» ${prefix}manga [titulo]
» ${prefix}character [titulo]
`}

exports.tag = (prefix) =>{
	return`
» ${prefix}stickertag
» ${prefix}videotag [titulo]
» ${prefix}vntag [titulo]
» ${prefix}imagetag [titulo]
`}

exports.stalk = (prefix) =>{
	return`
» ${prefix}igstalk [usuario]
» ${prefix}ghstalk [usuario]
» ${prefix}ytstalk [canal]
`}

exports.search = (prefix) =>{
	return`
» ${prefix}ytsearch [titulo]
» ${prefix}wallpaper [titulo]
» ${prefix}wikimedia [titulo]
» ${prefix}hentai
» ${prefix}wattpad [titulo]
» ${prefix}webtoons [titulo]
» ${prefix}drakor [titulo]
» ${prefix}pinterest [titulo]
`}

exports.converter = (prefix) =>{
	return`
» ${prefix}toaudio [video]
» ${prefix}tomp3 [video]
» ${prefix}tovn [video]
» ${prefix}stiker [responde a imagen]
» ${prefix}tourl [imagen/video/sticker]
» ${prefix}togif [sticker]
» ${prefix}tomp4 [sticker]
» ${prefix}toimg [responde a sticker]
`}

exports.effect = (prefix) =>{
	return`
» ${prefix}wanted [responde a imagen]
» ${prefix}utatoo [responde a imagen]
» ${prefix}unsharpen [responde a imagen]
» ${prefix}thanos [responde a imagen]
» ${prefix}sniper [responde a imagen]
» ${prefix}sharpen [responde a imagen]
» ${prefix}sepia [responde a imagen]
» ${prefix}scary [responde a imagen]
» ${prefix}rip [responde a imagen]
» ${prefix}redple [responde a imagen]
» ${prefix}rejected [responde a imagen]
» ${prefix}posterize [responde a imagen]
» ${prefix}ps4 [responde a imagen]
» ${prefix}pixelize [responde a imagen]
» ${prefix}missionpassed [responde a imagen]
» ${prefix}moustache [responde a imagen]
» ${prefix}lookwhatkarenhave [responde a imagen]
» ${prefix}jail [responde a imagen]
» ${prefix}invert [responde a imagen]
» ${prefix}instagram [responde a imagen]
» ${prefix}greyscale [responde a imagen]
» ${prefix}glitch [responde a imagen]
» ${prefix}gay [responde a imagen]
» ${prefix}frame [responde a imagen]
» ${prefix}fire [responde a imagen]
» ${prefix}distort [responde a imagen]
» ${prefix}dictator [responde a imagen]
» ${prefix}deepfry [responde a imagen]
» ${prefix}ddungeon [responde a imagen]
» ${prefix}circle [responde a imagen]
» ${prefix}challenger [responde a imagen]
» ${prefix}burn [responde a imagen]
» ${prefix}brazzers [responde a imagen]
» ${prefix}beautiful [responde a imagen]
`}

//
exports.effect2 = (prefix) =>{
	return`
» ${prefix}jail [responde a imagen]
» ${prefix}red [responde a imagen]
» ${prefix}gay [responde a imagen]
» ${prefix}bloo [responde a imagen]
» ${prefix}blue [responde a imagen]
» ${prefix}sepia [responde a imagen]
» ${prefix}green [responde a imagen]
» ${prefix}glass [responde a imagen]
» ${prefix}invert [responde a imagen]
» ${prefix}blurple [responde a imagen]
» ${prefix}blurple2 [responde a imagen]
» ${prefix}wasted [responde a imagen]
» ${prefix}passed [responde a imagen]
» ${prefix}triggered [responde a imagen]
» ${prefix}comrade [responde a imagen]
» ${prefix}greyscale [responde a imagen]
» ${prefix}threshold [responde a imagen]
» ${prefix}brightness [responde a imagen]
» ${prefix}invertgreyscale [responde a imagen]
`
}

exports.download = (prefix) =>{
return`
» ${prefix}tiktok [link]
» ${prefix}tiktoknowm [link]
» ${prefix}tiktokwm [link]
» ${prefix}tiktokaudio [link]
» ${prefix}ytdl [link]
» ${prefix}play [query]
» ${prefix}ytmp3 [link]
» ${prefix}ytshortmp3 [link]
» ${prefix}ytmp4 [link]
» ${prefix}ytshorts [link]
» ${prefix}facebook [link]
» ${prefix}facebooksd [link]
» ${prefix}facebookhd [link]
» ${prefix}fbaudio [link]
» ${prefix}igstory [usuario]
» ${prefix}igdl [link]
» ${prefix}igphoto [link]
» ${prefix}igvideo [link]
» ${prefix}igreels [link]
» ${prefix}igtv [link]
» ${prefix}soundcloud [link]
» ${prefix}gitclone [link repositorio]
» ${prefix}gitrepo [usuario repositorio branch]
» ${prefix}mediafire [link]
» ${prefix}twitter [link]
`
}

exports.ranime = (prefix) =>{
	return`
» ${prefix}loli
» ${prefix}neko
» ${prefix}waifu
» ${prefix}shinobu
» ${prefix}megumin
» ${prefix}bully
» ${prefix}cuddle
» ${prefix}cry
» ${prefix}hug
» ${prefix}awoo
» ${prefix}kiss
» ${prefix}lick
» ${prefix}pat
» ${prefix}smug
» ${prefix}bonk
» ${prefix}yeet
» ${prefix}blush
» ${prefix}smile
» ${prefix}wave
» ${prefix}highfive
» ${prefix}handhold
» ${prefix}nom
» ${prefix}bite
» ${prefix}glomp
» ${prefix}slap
» ${prefix}kill
» ${prefix}happy
» ${prefix}wink
» ${prefix}poke
» ${prefix}dance
» ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`
» ${prefix}ahegao
» ${prefix}ass
» ${prefix}bdsm
» ${prefix}blowjob
» ${prefix}cuckold
» ${prefix}cum
» ${prefix}ero
» ${prefix}femdom
» ${prefix}foot
» ${prefix}gangbang
» ${prefix}glasses
» ${prefix}jahy
» ${prefix}manga
» ${prefix}masturbation
» ${prefix}neko
» ${prefix}orgy
» ${prefix}panties
» ${prefix}pussy
» ${prefix}tentacles
» ${prefix}thighs
» ${prefix}yuri
» ${prefix}feet
» ${prefix}lewdkemo
» ${prefix}woof
» ${prefix}gasm
» ${prefix}solo
» ${prefix}8ball
» ${prefix}goose
» ${prefix}avatar
» ${prefix}hololewd
» ${prefix}gecg
» ${prefix}holo
» ${prefix}fox_girl
» ${prefix}tits
» ${prefix}eroyuri
» ${prefix}holoyero
» ${prefix}lizard
» ${prefix}keta
» ${prefix}eron
» ${prefix}erok
» ${prefix}kemonomimi
» ${prefix}cum_jpg
» ${prefix}nsfw_avatar
» ${prefix}erofeet
» ${prefix}meow
» ${prefix}wallpaper
» ${prefix}waifu
» ${prefix}trap
» ${prefix}lewd
» ${prefix}pussy_jpg
» ${prefix}futanari
» ${prefix}lewdk
» ${prefix}solog
» ${prefix}smug
» ${prefix}cum
» ${prefix}slap
» ${prefix}les
» ${prefix}erokemo
» ${prefix}bj
» ${prefix}pwankg
» ${prefix}pat
» ${prefix}poke
» ${prefix}feed
» ${prefix}nsfw_neko_gif
» ${prefix}pussy
» ${prefix}feetg
» ${prefix}baka
» ${prefix}hug
» ${prefix}kiss
» ${prefix}tickle
» ${prefix}spank
» ${prefix}kuni
» ${prefix}classic
» ${prefix}boobs
» ${prefix}anal
» ${prefix}ngif
» ${prefix}cuddle
» ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`
» ${prefix}halloween2 [texto1|texto2]
» ${prefix}horror [texto1|texto2]
» ${prefix}game8bit [texto1|texto2]
» ${prefix}layered [texto1|texto2]
» ${prefix}glitch2 [texto1|texto2]
» ${prefix}coolg [texto1|texto2]
» ${prefix}coolwg [texto1|texto2]
» ${prefix}realistic [texto1|texto2]
» ${prefix}space3d [texto1|texto2]
» ${prefix}gtiktok [texto1|texto2]
» ${prefix}stone [texto1|texto2]
» ${prefix}marvel [texto1|texto2]
» ${prefix}marvel2 [texto1|texto2]
» ${prefix}pornhub [texto1|texto2]
» ${prefix}avengers [texto1|texto2]
» ${prefix}metalr [texto1|texto2]
» ${prefix}metalg [texto1|texto2]
» ${prefix}metalg2 [texto1|texto2]
» ${prefix}halloween2 [texto1|texto2]
» ${prefix}lion [texto1|texto2]
» ${prefix}wolf_bw [texto1|texto2]
» ${prefix}wolf_g [texto1|texto2]
» ${prefix}ninja [texto1|texto2]
» ${prefix}3dsteel [texto1|texto2]
» ${prefix}horror2 [texto1|texto2]
» ${prefix}lava [texto1|texto2]
» ${prefix}bagel [texto1|texto2]
» ${prefix}blackpink [texto]
» ${prefix}rainbow2 [texto]
» ${prefix}water_pipe [texto]
» ${prefix}halloween [texto]
» ${prefix}sketch [texto]
» ${prefix}sircuit [texto]
» ${prefix}discovery [texto]
» ${prefix}metallic2 [texto]
» ${prefix}fiction [texto]
» ${prefix}demon [texto]
» ${prefix}transformer [texto]
» ${prefix}berry [texto]
» ${prefix}thunder [texto]
» ${prefix}magma [texto]
» ${prefix}3dstone [texto]
» ${prefix}neon [texto]
» ${prefix}glitch [texto]
» ${prefix}harry_potter [texto]
» ${prefix}embossed [texto]
» ${prefix}broken [texto]
» ${prefix}papercut [texto]
» ${prefix}gradient [texto]
» ${prefix}glossy [texto]
» ${prefix}watercolor [texto]
» ${prefix}multicolor [texto]
» ${prefix}neon_devil [texto]
» ${prefix}underwater [texto]
» ${prefix}bear [texto]
» ${prefix}wonderfulg [texto]
» ${prefix}christmas [texto]
» ${prefix}neon_light [texto]
» ${prefix}snow [texto]
» ${prefix}cloudsky [texto]
» ${prefix}luxury2 [texto]
» ${prefix}gradient2 [texto]
» ${prefix}summer [texto]
» ${prefix}writing [texto]
» ${prefix}engraved [texto]
» ${prefix}summery [texto]
» ${prefix}3dglue [texto]
» ${prefix}metaldark [texto]
» ${prefix}neonlight [texto]
» ${prefix}oscar [texto]
» ${prefix}minion [texto]
» ${prefix}holographic [texto]
» ${prefix}purple [texto]
» ${prefix}glossyb [texto]
» ${prefix}deluxe2 [texto]
» ${prefix}glossyc [texto]
» ${prefix}fabric [texto]
» ${prefix}neonc [texto]
» ${prefix}newyear [texto]
» ${prefix}newyear2 [texto]
» ${prefix}metals [texto]
» ${prefix}xmas [texto]
» ${prefix}blood [texto]
» ${prefix}darkg [texto]
» ${prefix}joker [texto]
» ${prefix}wicker [texto]
» ${prefix}natural [texto]
» ${prefix}firework [texto]
» ${prefix}skeleton [texto]
» ${prefix}balloon [texto]
» ${prefix}balloon2 [texto]
» ${prefix}balloon3 [texto]
» ${prefix}balloon4 [texto]
» ${prefix}balloon5 [texto]
» ${prefix}balloon6 [texto]
» ${prefix}balloon7 [texto]
» ${prefix}steel [texto]
» ${prefix}gloss [texto]
» ${prefix}denim [texto]
» ${prefix}decorate [texto]
» ${prefix}decorate2 [texto]
» ${prefix}peridot [texto]
» ${prefix}rock [texto]
» ${prefix}glass [texto]
» ${prefix}glass2 [texto]
» ${prefix}glass3 [texto]
» ${prefix}glass4 [texto]
» ${prefix}glass5 [texto]
» ${prefix}glass6 [texto]
» ${prefix}glass7 [texto]
» ${prefix}glass8 [texto]
» ${prefix}captain_as2 [texto]
» ${prefix}robot [texto]
» ${prefix}equalizer [texto]
» ${prefix}toxic [texto]
» ${prefix}sparkling [texto]
» ${prefix}sparkling2 [texto]
» ${prefix}sparkling3 [texto]
» ${prefix}sparkling4 [texto]
» ${prefix}sparkling5 [texto]
» ${prefix}sparkling6 [texto]
» ${prefix}sparkling7 [texto]
» ${prefix}decorative [texto]
» ${prefix}chocolate [texto]
» ${prefix}strawberry [texto]
» ${prefix}koifish [texto]
» ${prefix}bread [texto]
» ${prefix}matrix [texto]
» ${prefix}blood2 [texto]
» ${prefix}neonligth2 [texto]
» ${prefix}thunder2 [texto]
» ${prefix}3dbox [texto]
» ${prefix}neon2 [texto]
» ${prefix}roadw [texto]
» ${prefix}bokeh [texto]
» ${prefix}gneon [texto]
» ${prefix}advanced [texto]
» ${prefix}dropwater [texto]
» ${prefix}wall [texto]
» ${prefix}chrismast [texto]
» ${prefix}honey [texto]
» ${prefix}drug [texto]
» ${prefix}marble [texto]
» ${prefix}marble2 [texto]
» ${prefix}ice [texto]
» ${prefix}juice [texto]
» ${prefix}rusty [texto]
» ${prefix}abstra [texto]
» ${prefix}biscuit [texto]
» ${prefix}wood [texto]
» ${prefix}scifi [texto]
» ${prefix}metalr [texto]
» ${prefix}purpleg [texto]
» ${prefix}shiny [texto] 
» ${prefix}jewelry [texto]
» ${prefix}jewelry2 [texto]
» ${prefix}jewelry3 [texto]
» ${prefix}jewelry4 [texto]
» ${prefix}jewelry5 [texto]
» ${prefix}jewelry6 [texto]
» ${prefix}jewelry7 [texto]
» ${prefix}jewelry8 [texto]
» ${prefix}metalh [texto]
» ${prefix}golden [texto]
» ${prefix}glitter [texto]
» ${prefix}glitter2 [texto]
» ${prefix}glitter3 [texto]
» ${prefix}glitter4 [texto]
» ${prefix}glitter5 [texto]
» ${prefix}glitter6 [texto]
» ${prefix}glitter7 [texto]
» ${prefix}metale [texto]
» ${prefix}carbon [texto]
» ${prefix}candy [texto]
» ${prefix}metalb [texto]
» ${prefix}gemb [texto]
» ${prefix}3dchrome [texto]
» ${prefix}metalb2 [texto]
» ${prefix}metalg [texto]
» ${prefix}metalg [texto]
`
}


exports.other = (prefix) =>{
return`
» ${prefix}ttp [texto]
» ${prefix}attp [texto]
» ${prefix}afk [razon]
» ${prefix}translate [texto]
» ${prefix}kalkulator [titulo]
» ${prefix}smeme [texto]
» ${prefix}smeme2 [texto1|texto2]
» ${prefix}memegen [texto1|texto2]
`
}
exports.game = (prefix) =>{
return`
» ${prefix}kuismath
» ${prefix}tebak [opcion]
» ${prefix}tekateki
» ${prefix}susunkata
» ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`
» ${prefix}chika
» ${prefix}delvira
» ${prefix}ayu
» ${prefix}bunga
» ${prefix}aura
» ${prefix}nisa
» ${prefix}ziva
» ${prefix}yana
» ${prefix}viona
» ${prefix}syania
» ${prefix}riri
» ${prefix}syifa
» ${prefix}mama_gina
» ${prefix}alcakenya
» ${prefix}mangayutri
» ${prefix}rikagusriani
» ${prefix}asupan
» ${prefix}bocil
» ${prefix}geayubi
» ${prefix}santuy
» ${prefix}ukhty
» ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`
» ${prefix}china 
» ${prefix}indonesia 
» ${prefix}malaysia 
» ${prefix}thailand 
» ${prefix}korea 
» ${prefix}japan 
» ${prefix}vietnam 
» ${prefix}jenni 
» ${prefix}jiso 
» ${prefix}lisa  
» ${prefix}rose
`
}

exports.tqto = () =>{
	return`
» Fatih A.
» Ferdi
» DikaArdnt
» Mhankbarbar
» Nurutomo
» Rashid
» ZeeoneOfc
» Penyedia Module
» Y todo el apoyo
`
}

exports.primbonmenu = (prefix) =>{
	return`
» ${prefix}nomorhoki 887435047326
» ${prefix}artimimpi [titulo]
» ${prefix}artinama [titulo]
» ${prefix}ramaljodoh
» ${prefix}ramaljodohbali
» ${prefix}suamiistri
» ${prefix}ramalcinta
» ${prefix}cocoknama
» ${prefix}pasangan
» ${prefix}jadiannikah
» ${prefix}sifatusaha
» ${prefix}rezeki
» ${prefix}pekerjaan
» ${prefix}nasib
» ${prefix}penyakit
» ${prefix}tarot
» ${prefix}fengshui
» ${prefix}haribaik
» ${prefix}harisangar
» ${prefix}harisial
» ${prefix}nagahari
» ${prefix}arahrezeki
» ${prefix}peruntungan
» ${prefix}weton
» ${prefix}karakter
» ${prefix}keberuntungan
» ${prefix}memancing
» ${prefix}masasubur
» ${prefix}zodiak 
» ${prefix}shio [titulo]
`
}

exports.stcmenu = (prefix) =>{
	return`
» ${prefix}awoawo
» ${prefix}benedict
» ${prefix}chat
» ${prefix}dbfly
» ${prefix}dino_kuning
» ${prefix}doge
» ${prefix}gojosatoru
» ${prefix}hope_boy
» ${prefix}jisoo
» ${prefix}kr_robot
» ${prefix}kucing
» ${prefix}lonte
» ${prefix}manusia_lidi
» ${prefix}menjamet
» ${prefix}meow
» ${prefix}nicholas
» ${prefix}patrick
» ${prefix}popoci
» ${prefix}sponsbob
» ${prefix}kawan_sponsbob
» ${prefix}tyni
`}
