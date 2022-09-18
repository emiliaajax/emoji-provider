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

const getAllEmoticonsAndTags = () => {
  return smileysAndPeople
}

const getAllEmoticons = () => {
  const emoticonsArray = []
  for (let i = 0; i < smileysAndPeople.length; i++) {
    emoticonsArray.push(smileysAndPeople[i].emoticon)
  }
  return emoticonsArray
}

console.log(getAllEmoticons())
console.log(getAllEmoticonsAndTags())
