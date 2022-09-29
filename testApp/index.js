import { emojilib } from '../lib/index.js'

// const text = emojilib.replaceEmoticonWithUnicode('hej :D')
// console.log(text)
let emojis = ''
for (const emoji of emojilib.getAllEmojis()) {
  emojis += ' ' + emoji
}

// let tags = ''
// for (const tag of emojilib.getAllTags()) {
//   tags += ' :' + tag + ': '
// }

const div = document.createElement('div')
// const pElementForTags = document.createElement('p')
const pElementForEmojis = document.createElement('p')

pElementForEmojis.textContent = emojis
// pElementForTags.textContent = tags

div.appendChild(pElementForEmojis)
// div.appendChild(pElementForTags)

document.querySelector('#main').appendChild(div)
