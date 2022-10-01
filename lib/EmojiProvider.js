import { CodePointConverter } from './CodePointConverter.js'
import { EmojiResourcesRaw } from './EmojiResourcesRaw.js'
import { EmoticonTranslator } from './EmoticonTranslator.js'

export class EmojiProvider {
  #rawEmojiObjectsArray
  #emojiResourcesRaw
  #converter

  constructor () {
    this.#emojiResourcesRaw = new EmojiResourcesRaw()
    this.#converter = new CodePointConverter()
    this.#rawEmojiObjectsArray = this.#emojiResourcesRaw.getAllEmojiObjects
  }

  /**
   * Gets all emojis and corresponding tags.
   *
   * @returns {object[]}
   */
  getAllEmojisAndTags () {
    return this.#converter.allCodePointsToEmojis(this.#rawEmojiObjectsArray)
  }

  /**
   * Returns an array with emojis only.
   *
   * @returns {object[]} An array with emojis only.
   */
  getAllEmojis () {
    const emojis = []
    for (const emojiAndTag of this.getAllEmojisAndTags()) {
      // if (this.isSupportedEmoji(emojisAndTags[i].emoji)) {
      emojis.push(emojiAndTag.emoji)
      // }
    }
    return emojis
  }

  /**
   * Returns an array with all tags.
   *
   * @returns {string[]} An array with all tags.
   */
  getAllTags () {
    const tagsArray = []
    for (const emojiAndTag of this.getAllEmojisAndTags()) {
      tagsArray.push(emojiAndTag.tag)
    }
    return tagsArray
  }

  /**
   * Gets emojis belonging to given categories.
   *
   * @param  {...string} categories The categories to get emojis for.
   * @returns {object[]} An array with emoji object belonging to given categories.
   */
  getEmojiObjectsByCategory (...categories) {
    const emojiObjectsRaw = this.#emojiResourcesRaw.getEmojisAndTagsByCategory(...categories)
    return this.#converter.allCodePointsToEmojis(emojiObjectsRaw)
  }

  /**
   * Get emojis only from category.
   *
   * @param  {...any} categories The categories.
   * @returns {string[]} An array with emojis from categories.
   */
  getEmojisOnlyFromCategory (...categories) {
    const emojis = []
    for (const emojiObject of this.getEmojiObjectsByCategory(...categories)) {
      emojis.push(emojiObject.emoji)
    }
    return emojis
  }

  /**
   * Gets emoticon with tag name.
   *
   * @param {string} tag The tag of the emoticon.
   * @returns {string} The emoticon.
   */
  getEmojiByTag (tag) {
    const result = this.#searchForEmoji(tag)
    this.#checkIfEmojiWasFound(result)
    return result
  }

  /**
   * Replaces emoticons with emojis in text.
   *
   * @param {*} text text
   * @returns {*} text
   */
  replaceEmoticonWithEmoji (text) {
    const translator = new EmoticonTranslator(this.getAllEmojisAndTags())
    return translator.replaceEmoticonsWithEmojisInText(text)
  }

  /**
   * Gets emojis that matches the letters in text.
   *
   * @param {*} text The text.
   * @returns {Array} An array with the matching emojis.
   */
  getEmojisThatMatchesText (text) {
    let emojisArray = []
    if (text.length > 0) {
      emojisArray = this.#getMatchingEmojis(text)
    }
    return emojisArray
  }

  /**
   * Searches the array for emojis.
   *
   * @param {*} tag Hej.
   * @returns {*} Hej.
   */
  #searchForEmoji (tag) {
    const emojiObject = this.getAllEmojisAndTags().find(element => element.tag === tag)
    return emojiObject ? emojiObject.emoji : ''
  }

  /**
   * Searches for matching emojis.
   *
   * @param {*} text Text.
   * @returns {*} Emojis.
   */
  #getMatchingEmojis (text) {
    return (this.getAllEmojisAndTags()
      .filter(element => text === element.tag.slice(0, text.length)))
      .map(element => element.emoji)
  }

  // https://stackoverflow.com/questions/45576748/how-can-i-detect-rendering-support-for-emoji-in-javascript (retreived at 30/11)
  /**
   * Test.
   *
   * @param {*} emoji Test.
   * @returns {*} Test.
   */
  #isEmojiSupported (emoji) {
    const ctx = document.createElement('canvas').getContext('2d')
    ctx.fillText(emoji, -4, 4)
    return ctx.getImageData(0, 0, 1, 1).data[3] > 0
  }

  /**
   * Checks if emoji was found, otherwise throws error.
   *
   * @param {*} emoji Emoji to check.
   */
  #checkIfEmojiWasFound (emoji) {
    if (emoji.length === 0) {
      throw new TypeError('Sorry, it does not a exist an emoji with given tag!')
    }
  }
}
