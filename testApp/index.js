import { emojiLib } from '../lib/index.js'

const text = emojiLib.replaceEmoticonWithEmoji('hej :D')
console.log(text)
document.querySelector('#main').textContent = text
