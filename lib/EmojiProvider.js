import { UnicodeConverter } from './UnicodeConverter.js'
import { EmojiResources } from './EmojiResources.js'
import { EmoticonConverter } from './EmoticonConverter.js'

export class EmojiProvider {
  #emojiResources
  #unicodeConverter
  #unconvertedEmojiObjects
  #convertedEmojiObjects

  constructor () {
    this.#emojiResources = new EmojiResources()
    this.#unicodeConverter = new UnicodeConverter()
    this.#unconvertedEmojiObjects = this.#emojiResources.getEmojiObjectsUnconverted()
    this.#convertedEmojiObjects = this.#unicodeConverter.convertUnicodesToEmojis(this.#unconvertedEmojiObjects)
  }

  /**
   * Returns all emojis and corresponding tags desribed in Unicode version 15.
   *
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
   * Returns all emojis desribed in Unicode version 15.
   *
   * @returns {string[]} Array with emojis only.
   */
  getEmojis () {
    return this.getEmojisAndTags().map(element => {
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
    const convertedEmojiObjects = this.#unicodeConverter
      .convertUnicodesToEmojis(this.#emojiResources.getEmojiObjectsByCategoryUnconverted(...categories))
    return convertedEmojiObjects.map(element => {
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
   * Returns an emoji corresponding to given tag.
   *
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
   * Returns a new string where emoticons are replaced with emojis.
   *
   * @param {string} text
   * @returns {string}
   */
  replaceEmoticonsWithEmojis (text) {
    this.#validateString(text)
    const emoticonConverter = new EmoticonConverter(this.#convertedEmojiObjects)
    return emoticonConverter.replaceAllEmoticonsWithEmojis(text)
  }

  /**
   * Returns an array with all emojis whose corresponding tags starts with the input.
   *
   * @param {string} text
   * @returns {string[]}
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
   * @throws {TypeError}
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
