import { UnicodeConverter } from './UnicodeConverter.js'
import { EmojiResources } from './EmojiResources.js'
import { EmoticonConverter } from './EmoticonConverter.js'

export class EmojiProvider {
  #unconvertedEmojiObjectsArray
  #emojiResources
  #converter

  constructor () {
    this.#emojiResources = new EmojiResources()
    this.#converter = new UnicodeConverter()
    this.#unconvertedEmojiObjectsArray = this.#emojiResources.getAllEmojiObjectsUnconverted()
  }

  /**
   * @returns {object[]}
   */
  getAllEmojiObjects () {
    return this.#converter.convertUnicodesToEmojis(this.#unconvertedEmojiObjectsArray)
  }

  /**
   * @returns {string[]} Array with emojis only.
   */
  getEmojisOnly () {
    return this.getAllEmojiObjects().map(element => { 
      return element.emoji
    })
  }

  /**
   * @param  {...string} categories
   * @returns {object[]} An array with emoji objects.
   */
  getEmojiObjectsByCategory (...categories) {
    const emojiObjectsUnconverted = this.#emojiResources.getEmojiObjectsByCategoryUnconverted(...categories)
    return this.#converter.convertUnicodesToEmojis(emojiObjectsUnconverted)
  }

  /**
   * @param  {...string} categories
   * @returns {string[]} An array with emojis only.
   */
  getEmojisOnlyFromCategory (...categories) {
    return this.getEmojiObjectsByCategory(...categories).map(element => {
      return element.emoji
    })
  }

  /**
   * @param {string} tag
   * @returns {string}
   */
  getEmojiByTag (tag) {
    const result = this.#searchForEmoji(tag)
    this.#checkIfEmojiWasFound(result)
    return result
  }

  /**
   * @param {string} text
   * @returns {string}
   */
  replaceEmoticonsWithEmojis (text) {
    const emoticonConverter = new EmoticonConverter(this.getAllEmojiObjects())
    return emoticonConverter.replaceAllEmoticonsWithEmojis(text)
  }

  /**
   * @param {string} characters
   * @returns {string[]} An array with emojis only.
   */
  getEmojisThatMatchesText (characters) {
    let emojisArray = []
    if (characters.length > 0) {
      emojisArray = this.#getMatchingEmojis(characters)
    }
    return emojisArray
  }

  /**
   * @param {string} text
   * @returns {string[]} An array with emojis only.
   */
  #getMatchingEmojis (text) {
  return (this.getAllEmojiObjects()
    .filter(element => text === element.tag.slice(0, text.length)))
    .map(element => element.emoji)
  }

  /**
   * @param {string} tag
   * @returns {string} The emoji if tag is found, otherwise an empty string.
   */
  #searchForEmoji (tag) {
    const emojiObject = this.getAllEmojiObjects().find(element => element.tag === tag)
    return emojiObject ? emojiObject.emoji : ''
  }

  /**
   * Throws an error if the emoji was not found.
   *
   * @param {string} emoji
   * @throws {TypeError}
   */
  #checkIfEmojiWasFound (emoji) {
    if (emoji.length === 0) {
      throw new TypeError('Sorry, it does not a exist an emoji with given tag!')
    }
  }
}
