let handler = async (m, { conn, isRowner}) => {
	let _muptime
	let totalreg = Object.keys(global.db.data.users).length
	let totalchats = Object.keys(global.db.data.chats).length
	let pp = 'https://tinyurl.com/4n86mb2e'
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
  const used = process.memoryUsage()
  let txt = ` 「 *Info Bot* 」\n`
      txt += `「 *🏳️ Creadora ∙* 」Jana\n`
      txt += `「 *👥 Grupos Unidos ∙* 」 ${groupsIn.length}\n`
      txt += `「 *👤 Chats Privados ∙* 」 ${chats.length - groupsIn.length}\n`
      txt += `「 *💬 Total De Chats ∙* 」 ${chats.length}\n`
      txt += `「 *🏴 Usuarios Registrados ∙* 」 ${totalreg}\n`
      txt += `「 *💫 Grupos Registrados ∙* 」 ${totalchats}\n`
      txt += `「 *🕜 Uptime ∙* 」 ${muptime}\n`
      txt += `「 *🚩 Contacto ∙* 」 wa.me/526122294403`
await conn.sendFile(m.chat, pp, 'thumbnail.jpg', txt, m)
}
handler.help = ['status']
handler.tags = ['main']
handler.command = /^(info|estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
