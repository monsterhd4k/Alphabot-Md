exports.private = () =>{
	return`La función solo se puede usar en el chat privado.`
	}
exports.wait = () => {
    return `[⏳] Espere un momento...`
}
exports.ok = () => {
    return `[✅] Hecho.`
}

exports.err = () => {
    return `[⚠️] Error.`
}
exports.erorLink = () => {
    return `[⚠️] Enlace incorrecto.`
}
exports.media = () => {
    return `Seleccione los medios que desea descargar`
}
exports.replyImg = (prefix, command) => {
    return `Enviar/responder foto con ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `[❌] Formato incorrecto, Por favor verifique cómo usar en *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `[❌] Por favor ingrese un mensaje!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `[❌] El comando *${cmd}* no está registrado en *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `[❌] Este comando es solo para el dueño!`
}

exports.doneOwner = () => {
    return `[✅] Hecho.`
}

exports.groupOnly = () => {
    return `[❌] Este comando solo se puede usar en grupos.!`
}

exports.adminOnly = () => {
    return `[❌] Este comando solo puede ser utilizado por administradores de grupo!`
}

exports.nhFalse = () => {
    return `[❌] Codigo invalido!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 LISTA DE BANEADOS 」 ──*
    
Total : *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `[❌] El usuario no es un administrador!`
}

exports.adminAlready = () => {
    return `[❌] No se puede promocionar a un usuario que es administrador!`
}

exports.botNotAdmin = () => {
    return `[❌] Debes hacer administrador al bot primero!`
}

exports.received = (pushname) => {
    return `
Hola👋🏻 ${pushname}!
Gracias por informar, pronto recibiremos su informe..`
}

exports.videoLimit = () => {
    return `[❌] El tamaño del archivo es demasiado grande!`
}

exports.notNum = (q) => {
    return `"${q}", no es un numero!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hola *${pushname}* 👋🏻 
	
Este es un bot para Whatsapp Beta para múltiples dispositivos.
Si encuentra algún tipo de error o falla, por favor comprenda,
reporta al dueño para que se arregle inmediatamente.     
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
➣ ${prefix}stiker [responde a imagen/video]
➣ ${prefix}tourl [imagen/video/sticker]
➣ ${prefix}togif [sticker]
➣ ${prefix}tomp4 [sticker]
➣ ${prefix}toimg [responde a sticker]


*『 Efecto de Imagenes 』* 
➣ ${prefix}wanted [responde a imagen/sticker]
➣ ${prefix}utatoo [responde a imagen/sticker]
➣ ${prefix}unsharpen [responde a imagen/sticker]
➣ ${prefix}thanos [responde a imagen/sticker]
➣ ${prefix}sniper [responde a imagen/sticker]
➣ ${prefix}sharpen [responde a imagen/sticker]
➣ ${prefix}sepia [responde a imagen/sticker]
➣ ${prefix}scary [responde a imagen/sticker]
➣ ${prefix}rip [responde a imagen/sticker]
➣ ${prefix}redple [responde a imagen/sticker]
➣ ${prefix}rejected [responde a imagen/sticker]
➣ ${prefix}posterize [responde a imagen/sticker]
➣ ${prefix}ps4 [responde a imagen/sticker]
➣ ${prefix}pixelize [responde a imagen/sticker]
➣ ${prefix}missionpassed [responde a imagen/sticker]
➣ ${prefix}moustache [responde a imagen/sticker]
➣ ${prefix}lookwhatkarenhave [responde a imagen/sticker]
➣ ${prefix}jail [responde a imagen/sticker]
➣ ${prefix}invert [responde a imagen/sticker]
➣ ${prefix}instagram [responde a imagen/sticker]
➣ ${prefix}greyscale [responde a imagen/sticker]
➣ ${prefix}glitch [responde a imagen/sticker]
➣ ${prefix}gay [responde a imagen/sticker]
➣ ${prefix}frame [responde a imagen/sticker]
➣ ${prefix}fire [responde a imagen/sticker]
➣ ${prefix}distort [responde a imagen/sticker]
➣ ${prefix}dictator [responde a imagen/sticker]
➣ ${prefix}deepfry [responde a imagen/sticker]
➣ ${prefix}ddungeon [responde a imagen/sticker]
➣ ${prefix}circle [responde a imagen/sticker]
➣ ${prefix}challenger [responde a imagen/sticker]
➣ ${prefix}burn [responde a imagen/sticker]
➣ ${prefix}brazzers [responde a imagen/sticker]
➣ ${prefix}beautiful [responde a imagen/sticker]


 *『 Efectos de Sticker 』* 
➣ ${prefix}jail [responde a imagen/sticker]
➣ ${prefix}red [responde a imagen/sticker]
➣ ${prefix}gay [responde a imagen/sticker]
➣ ${prefix}bloo [responde a imagen/sticker]
➣ ${prefix}blue [responde a imagen/sticker]
➣ ${prefix}sepia [responde a imagen/sticker]
➣ ${prefix}green [responde a imagen/sticker]
➣ ${prefix}glass [responde a imagen/sticker]
➣ ${prefix}invert [responde a imagen/sticker]
➣ ${prefix}blurple [responde a imagen/sticker]
➣ ${prefix}blurple2 [responde a imagen/sticker]
➣ ${prefix}wasted [responde a imagen/sticker]
➣ ${prefix}passed [responde a imagen/sticker]
➣ ${prefix}triggered [responde a imagen/sticker]
➣ ${prefix}comrade [responde a imagen/sticker]
➣ ${prefix}greyscale [responde a imagen/sticker]
➣ ${prefix}threshold [responde a imagen/sticker]
➣ ${prefix}brightness [responde a imagen/sticker]
➣ ${prefix}invertgreyscale [responde a imagen/sticker]


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


 *『  Menu TextPro  」*
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
	return`╭─❒ 「 Database 」 
├ ${prefix}setcmd [reply stiker]
├ ${prefix}delcmd [reply stiker]
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg [nama file]
├ ${prefix}getmsg [nama file]
├ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}wm packname|author
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [reply image]
├ ${prefix}antilink [on/off]
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}take packname|author
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag [query]
├ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
├ ${prefix}toaudio [video]
├ ${prefix}tomp3 [video]
├ ${prefix}tovn [video]
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image/stiker]
├ ${prefix}utatoo [reply image/stiker]
├ ${prefix}unsharpen [reply image/stiker]
├ ${prefix}thanos [reply image/stiker]
├ ${prefix}sniper [reply image/stiker]
├ ${prefix}sharpen [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}scary [reply image/stiker]
├ ${prefix}rip [reply image/stiker]
├ ${prefix}redple [reply image/stiker]
├ ${prefix}rejected [reply image/stiker]
├ ${prefix}posterize [reply image/stiker]
├ ${prefix}ps4 [reply image/stiker]
├ ${prefix}pixelize [reply image/stiker]
├ ${prefix}missionpassed [reply image/stiker]
├ ${prefix}moustache [reply image/stiker]
├ ${prefix}lookwhatkarenhave [reply image/stiker]
├ ${prefix}jail [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}instagram [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}glitch [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}frame [reply image/stiker]
├ ${prefix}fire [reply image/stiker]
├ ${prefix}distort [reply image/stiker]
├ ${prefix}dictator [reply image/stiker]
├ ${prefix}deepfry [reply image/stiker]
├ ${prefix}ddungeon [reply image/stiker]
├ ${prefix}circle [reply image/stiker]
├ ${prefix}challenger [reply image/stiker]
├ ${prefix}burn [reply image/stiker]
├ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail [reply image/stiker]
├ ${prefix}red [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}bloo [reply image/stiker]
├ ${prefix}blue [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}green [reply image/stiker]
├ ${prefix}glass [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}blurple [reply image/stiker]
├ ${prefix}blurple2 [reply image/stiker]
├ ${prefix}wasted [reply image/stiker]
├ ${prefix}passed [reply image/stiker]
├ ${prefix}triggered [reply image/stiker]
├ ${prefix}comrade [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}threshold [reply image/stiker]
├ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
├ ${prefix}soundcloud [link]
├ ${prefix}gitclone [link repo]
├ ${prefix}gitrepo [username repo branch]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
├ ${prefix}ahegao
├ ${prefix}ass
├ ${prefix}bdsm
├ ${prefix}blowjob
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}ero
├ ${prefix}femdom
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}manga
├ ${prefix}masturbation
├ ${prefix}neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}pussy
├ ${prefix}tentacles
├ ${prefix}thighs
├ ${prefix}yuri
├ ${prefix}feet
├ ${prefix}lewdkemo
├ ${prefix}woof
├ ${prefix}gasm
├ ${prefix}solo
├ ${prefix}8ball
├ ${prefix}goose
├ ${prefix}avatar
├ ${prefix}hololewd
├ ${prefix}gecg
├ ${prefix}holo
├ ${prefix}fox_girl
├ ${prefix}tits
├ ${prefix}eroyuri
├ ${prefix}holoyero
├ ${prefix}lizard
├ ${prefix}keta
├ ${prefix}eron
├ ${prefix}erok
├ ${prefix}kemonomimi
├ ${prefix}cum_jpg
├ ${prefix}nsfw_avatar
├ ${prefix}erofeet
├ ${prefix}meow
├ ${prefix}wallpaper
├ ${prefix}waifu
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}pussy_jpg
├ ${prefix}futanari
├ ${prefix}lewdk
├ ${prefix}solog
├ ${prefix}smug
├ ${prefix}cum
├ ${prefix}slap
├ ${prefix}les
├ ${prefix}erokemo
├ ${prefix}bj
├ ${prefix}pwankg
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}feed
├ ${prefix}nsfw_neko_gif
├ ${prefix}pussy
├ ${prefix}feetg
├ ${prefix}baka
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}tickle
├ ${prefix}spank
├ ${prefix}kuni
├ ${prefix}classic
├ ${prefix}boobs
├ ${prefix}anal
├ ${prefix}ngif
├ ${prefix}cuddle
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}pornhub text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
├ ${prefix}ttp [text]
├ ${prefix}attp [text]
├ ${prefix}afk [reason]
├ ${prefix}translate kode_bahasa text
├ ${prefix}kalkulator [query]
├ ${prefix}smeme [text]
├ ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
├ ${prefix}kuismath
├ ${prefix}tebak [option]
├ ${prefix}tekateki
├ ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
├ ${prefix}chika
├ ${prefix}delvira
├ ${prefix}ayu
├ ${prefix}bunga
├ ${prefix}aura
├ ${prefix}nisa
├ ${prefix}ziva
├ ${prefix}yana
├ ${prefix}viona
├ ${prefix}syania
├ ${prefix}riri
├ ${prefix}syifa
├ ${prefix}mama_gina
├ ${prefix}alcakenya
├ ${prefix}mangayutri
├ ${prefix}rikagusriani
├ ${prefix}asupan
├ ${prefix}bocil
├ ${prefix}geayubi
├ ${prefix}santuy
├ ${prefix}ukhty
╰❒ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
├ ${prefix}china 
├ ${prefix}indonesia 
├ ${prefix}malaysia 
├ ${prefix}thailand 
├ ${prefix}korea 
├ ${prefix}japan 
├ ${prefix}vietnam 
├ ${prefix}jenni 
├ ${prefix}jiso 
├ ${prefix}lisa  
╰❒ ${prefix}rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
├ My God
├ My Parents
├ Fatih A.
├ Ferdi
├ DikaArdnt
├ Mhankbarbar
├ Nurutomo
├ Rashid
├ ZeeoneOfc
├ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
├ ${prefix}nomorhoki 887435047326
├ ${prefix}artimimpi [query]
├ ${prefix}artinama [query]
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak 
╰❒ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
├ ${prefix}awoawo
├ ${prefix}benedict
├ ${prefix}chat
├ ${prefix}dbfly
├ ${prefix}dino_kuning
├ ${prefix}doge
├ ${prefix}gojosatoru
├ ${prefix}hope_boy
├ ${prefix}jisoo
├ ${prefix}kr_robot
├ ${prefix}kucing
├ ${prefix}lonte
├ ${prefix}manusia_lidi
├ ${prefix}menjamet
├ ${prefix}meow
├ ${prefix}nicholas
├ ${prefix}patrick
├ ${prefix}popoci
├ ${prefix}sponsbob
├ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni
`}
