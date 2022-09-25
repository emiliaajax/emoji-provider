import { smileysAndPeople } from './emojis/smileysAndPeople.js'
console.log(smileysAndPeople)

/**
 * Exports smileys and people.
 *
 * @returns {Array} An array with tags and emoticons.
 */
const getAllEmojisAndTags = () => {
  return smileysAndPeople
}

/**
 * Exports all emoticons.
 *
 * @returns {Array} An array with all emoticons.
 */
const getAllEmojis = () => {
  const emoticonsArray = []
  for (let i = 0; i < smileysAndPeople.length; i++) {
    emoticonsArray.push(smileysAndPeople[i].emoticon)
  }
  return emoticonsArray
}

/**
 * Gets emoticon with tag name.
 *
 * @param {*} tag The tag of the emoticon.
 * @returns {string} The emoticon.
 */
const getEmojiByTag = (tag) => {
  let emoji = 'Sorry, an emoji with given tag does not exist...'
  for (let i = 0; i < smileysAndPeople.length; i++) {
    if (smileysAndPeople[i].tag === tag) {
      emoji = smileysAndPeople[i].emoji
    }
  }
  return emoji
}

/**
 * Gets all emoticons of the emojis that have an emoticon.
 *
 * @returns {Array} An array with emoticons.
 */
const getAllEmoticons = () => {
  const emoticonArray = []
  for (let i = 0; i < smileysAndPeople.length; i++) {
    if (smileysAndPeople[i].emoticon) {
      emoticonArray.push(smileysAndPeople[i].emoticon)
    }
  }
  return emoticonArray
}

/**
 * Replaces an emoticon with an emoji.
 *
 * @param {string} text Text to be searched for emojis.
 * @returns {string} The text with the emoticons replaced with emojis.
 */
const replaceEmoticonWithEmoji = (text) => {
  const emoticons = getAllEmoticons()
  for (let i = 0; i < emoticons.length; i++) {
    const emoticon = emoticons[i]
    const count = countEmoticonOccurences(text, emoticon)
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        const index = smileysAndPeople.findIndex(element => element.emoticon === emoticon)
        text = text.replace(emoticon, smileysAndPeople[index].emoji)
      }
    }
  }
  return text
}

// https://stackabuse.com/javascript-how-to-count-the-number-of-substring-occurrences-in-a-string/
/**
 * Counts how many of one emoticon is in a text.
 *
 * @param {*} text The text that is searched
 * @param {*} emoticon The emoticon to check for.
 * @returns {number} The count.
 */
const countEmoticonOccurences = (text, emoticon) => {
  return text.split(emoticon).length - 1
}

/**
 * Gets emojis that matches the letters in text.
 *
 * @param {*} text The text.
 * @returns {Array} An array with the matching emojis.
 */
const getEmojisThatMatches = (text) => {
  const textLength = text.length
  const emojisArray = []
  for (let i = 0; i < smileysAndPeople.length; i++) {
    if (text === smileysAndPeople[i].tag?.slice(0, textLength)) {
      emojisArray.push(smileysAndPeople[i].emoji)
    }
  }
  return emojisArray
}

// const getEmojisByCategory = () => {
// }

// const getAllTags = () => {
//   const tagsArray = []
//   for (let i = 0; i < smileysAndPeople.length; i++) {
//     tagsArray.push(smileysAndPeople[i].tag)
//   }
//   return tagsArray
// }

/**
 * Test.
 *
 * @param {*} text Test.
 * @returns {*} Test.
 */
export const replaceIt = (text) => {
  const emoticons = getAllEmoticons()
  for (let i = 0; i < emoticons.length; i++) {
    const emoticon = emoticons[i]
    const count = countEmoticonOccurences(text, emoticon)
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        text = text.replace(emoticon, 'F601')
      }
    }
  }
  return text
}

console.log(getAllEmojis())
console.log(getAllEmojisAndTags())
console.log(getEmojiByTag('space-invader'))
console.log(replaceEmoticonWithEmoji('hej på dig :D :D :D :D :D :)'))
console.log(getEmojisThatMatches('sa'))
