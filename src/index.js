import fs from 'fs'

/**
 * Loading JSON files synchronously.
 *
 * @param {*} path The path of the JSON file.
 * @returns {*} The JSON file.
 */
// Inspired y https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)))
const smileysAndPeople = loadJSON('./utils/smileysAndPeople.json')

/**
 * Exports smileys and people.
 *
 * @returns {Array} An array with tags and emoticons.
 */
const getAllEmoticonsAndTags = () => {
  return smileysAndPeople
}

/**
 * Exports all emoticons.
 *
 * @returns {Array} An array with all emoticons.
 */
const getAllEmoticons = () => {
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
const getEmoticonByTag = (tag) => {
  let emoticon = 'Sorry, an emoticon with given tag does not exist...'
  for (let i = 0; i < smileysAndPeople.length; i++) {
    if (smileysAndPeople[i].tag === tag) {
      emoticon = smileysAndPeople[i].emoticon
    }
  }
  return emoticon
}

console.log(getAllEmoticons())
console.log(getAllEmoticonsAndTags())
console.log(getEmoticonByTag('space-invader'))
