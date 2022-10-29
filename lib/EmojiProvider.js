import { UnicodeConverter } from './UnicodeConverter.js'
import { EmojiResources } from './EmojiResources.js'
import { EmoticonConverter } from './EmoticonConverter.js'

export class EmojiProvider {
  #emojiResources
  #converter
  #unconvertedEmojiObjects
  #convertedEmojiObjects

  constructor () {
    this.#emojiResources = new EmojiResources()
    this.#converter = new UnicodeConverter()
    this.#unconvertedEmojiObjects = this.#emojiResources.getEmojiObjectsUnconverted()
    this.#convertedEmojiObjects = this.#converter.convertUnicodesToEmojis(this.#unconvertedEmojiObjects)
  }

  /**
   * @returns {string[]} Array with emojis only.
   */
  getEmojis () {
    return this.getEmojisAndTags().map(element => {
      return element.emoji
    })
  }

  /**
   * @returns {object[]}
   */
  getEmojisAndTags () {
    return this.#convertedEmojiObjects.map(element => {
      return {
        tag: element.tag,
        emoji: element.emoji
      }
    })
  }

  /**
   * The valid input categories are: activity, animalsAndNature, flags, foodAndDrink, objects, peopleAndBody, smileysAndEmotion, symbols and travelAndPlaces. OBS! The spelling must be exact.
   *
   * @param  {...string} emojiCategories
   * @returns {string[]} An array with emojis only.
   */
  getEmojisByCategory (...categories) {
    return this.getEmojisAndTagsByCategory(...categories)
      .map(element => {
        return element.emoji
      })
  }

  /**
   * The valid input categories are: activity, animalsAndNature, flags, foodAndDrink, objects, peopleAndBody, smileysAndEmotion, symbols and travelAndPlaces. OBS! The spelling must be exact.
   *
   * @param  {...string} emojiCategories
   * @returns {object[]} An array with emoji objects.
   */
  getEmojisAndTagsByCategory (...categories) {
    const convertedEmojiObjects = this.#converter
      .convertUnicodesToEmojis(this.#emojiResources.getEmojiObjectsByCategoryUnconverted(...categories))
    return convertedEmojiObjects.map(element => {
      return {
        tag: element.tag,
        emoji: element.emoji
      }
    })
  }

  /**
   * @param {string} tag
   * @returns {string}
   */
  getEmojiByTag (tag) {
    this.#validateString(tag)
    const result = this.#searchForEmoji(tag)
    this.#checkIfEmojiWasFound(result)
    return result
  }

  /**
   * @param {string} text
   * @returns {string}
   */
  replaceEmoticonsWithEmojis (text) {
    this.#validateString(text)
    const emoticonConverter = new EmoticonConverter(this.#convertedEmojiObjects)
    return emoticonConverter.replaceAllEmoticonsWithEmojis(text)
  }

  /**
   * @param {string} text
   * @returns {string[]} An array with emojis only.
   */
  getMatchingEmojis (text) {
    this.#validateString(text)
    let emojisArray = []
    if (text.length > 0) {
      emojisArray = this.#searchForMatchingEmojis(text)
    }
    return emojisArray
  }

  /**
   * @param {string} text
   */
  #validateString (text) {
    if (typeof text !== 'string') {
      throw new TypeError('Invalid input! Input must be of type string.')
    }
  }

  /**
   * @param {string} tag
   * @returns {string} The emoji if tag is found, otherwise an empty string.
   */
  #searchForEmoji (tag) {
    const emojiObject = this.getEmojisAndTags().find(element => element.tag === tag)
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

  /**
   * @param {string} text
   * @returns {string[]} An array with emojis only.
   */
  #searchForMatchingEmojis (text) {
    return (this.getEmojisAndTags()
      .filter(element => text === element.tag.slice(0, text.length)))
      .map(element => element.emoji)
  }
}
