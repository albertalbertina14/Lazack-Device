import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `🐉 *Please enter the title of a YouTube video\n\nExample, !${command} Goku Ultra Instinct*`, m, rcanal, )

conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `☁️ *Title:* 
» ${v.title}

🔗 *Link:* 
» ${v.url}

🕝 *Duration:*
» ${v.timestamp}

📆 *Uploaded:* 
» ${v.ago}

👀 *Views:* 
» ${v.views}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)

}
handler.help = ['ytsearch']
handler.tags = ['searcher']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i

handler.register = true
//handler.yenes = 1

export default handler