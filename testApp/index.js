import { emojilib } from '../lib/index.js'

const text = emojilib.replaceEmoticonWithEmoji('hej :D <3 :d Hur mår du? :D :p ..')
const emoji = emojilib.getEmojiByTag('coffee')

let emojis = ''
for (const emoji of emojilib.getAllEmojis()) {
  emojis += ' ' + emoji
}

// let emojisFromInputText = ''
// for (const emoji of emojilib.getEmojisThatMatchesText('sad')) {
//   emojisFromInputText += ' ' + emoji
// }

// let emojisFromGivenCategories = ''
// for (const emoji of emojilib.getEmojisOnlyFromCategory('symbols')) {
//   emojisFromGivenCategories += ' ' + emoji
// }

// let tags = ''
// for (const tag of emojilib.getAllTags()) {
//   tags += ' :' + tag + ': '
// }

const div = document.createElement('div')
// const pElementForTags = document.createElement('p')
const pElementForEmojis = document.createElement('p')
const pElementForText = document.createElement('p')
const pElementForTag = document.createElement('p')
// const pElementForInputText = document.createElement('p')

pElementForEmojis.textContent = emojis
pElementForText.textContent = text
pElementForTag.textContent = emoji
// pElementForInputText.textContent = emojisFromInputText
pElementForTags.textContent = emojilib.getAllTags()

console.log(emojilib.getAllTags())

// div.appendChild(pElementForInputText)
// div.appendChild(pElementForTag)
// div.appendChild(pElementForText)
// div.appendChild(pElementForEmojis)
div.appendChild(pElementForTags)

document.querySelector('#main').appendChild(div)
