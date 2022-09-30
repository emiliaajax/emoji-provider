import { emojilib } from '../lib/index.js'

const text = emojilib.replaceEmoticonWithEmoji('hej :D <3 Hur mår du? :D')

// let emojis = ''
// for (const emoji of emojilib.getAllEmojis()) {
//   emojis += ' ' + emoji
// }

// let emojisFromInputText = ''
// for (const emoji of emojilib.getEmojisThatMatchesText('sad')) {
//   emojisFromInputText += ' ' + emoji
// }

let emojisFromGivenCategories = ''
for (const emoji of emojilib.getEmojisOnlyFromCategory('flags')) {
  emojisFromGivenCategories += ' ' + emoji
}

// let tags = ''
// for (const tag of emojilib.getAllTags()) {
//   tags += ' :' + tag + ': '
// }

const div = document.createElement('div')
// const pElementForTags = document.createElement('p')
const pElementForEmojis = document.createElement('p')
const pElementForText = document.createElement('p')

pElementForEmojis.textContent = emojisFromGivenCategories
pElementForText.textContent = text
// pElementForTags.textContent = tags

div.appendChild(pElementForText)
div.appendChild(pElementForEmojis)
// div.appendChild(pElementForTags)

document.querySelector('#main').appendChild(div)
