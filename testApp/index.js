import { emojilib } from '../lib/index.js'

const text = emojilib.replaceEmoticonWithUnicode('hej :D')
console.log(text)
const p = document.createElement('p')
p.textContent = text
document.querySelector('#main').appendChild(p)
