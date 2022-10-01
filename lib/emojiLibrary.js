import { CodePointConverter } from './CodePointConverter.js'
import { EmojiLibraryRaw } from './EmojiLibraryRaw.js'

/**
 * Represents a class.
 *
 * @class
 */
export class EmojiLibrary {
  #rawEmojiObjectsArray
  #emojiLibraryRaw
  #converter

  /**
   * Creates an instance of type EmojiLibrary.
   */
  constructor () {
    this.#emojiLibraryRaw = new EmojiLibraryRaw()
    this.#converter = new CodePointConverter()
    this.#rawEmojiObjectsArray = this.#emojiLibraryRaw.getAllEmojiObjects
  }

  /**
   * Gets all emojis and corresponding tags.
   *
   * @returns {object[]} All emojis with corresponding tags.
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
    const emojisAndTags = this.getAllEmojisAndTags()
    const emojis = []
    for (let i = 0; i < emojisAndTags.length; i++) {
      // if (this.isSupportedEmoji(emojisAndTags[i].emoji)) {
      emojis.push(emojisAndTags[i].emoji)
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
    const emojisAndTags = this.getAllEmojisAndTags()
    const tagsArray = []
    for (let i = 0; i < emojisAndTags.length; i++) {
      tagsArray.push(emojisAndTags[i].tag)
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
    const emojiObjectsRaw = this.#emojiLibraryRaw.getEmojisAndTagsByCategory(...categories)
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
   * Replaces an emoticon with an emoji.
   *
   * @param {string} text Text to be searched for emojis.
   * @returns {string} The text with the emoticons replaced with emojis.
   */
  replaceEmoticonWithEmoji (text) {
    for (let i = 0; i < this.#getAllEmoticons().length; i++) {
      const emoticonVariations = this.#getAllEmoticons()[i]
      for (const emoticon of emoticonVariations) {
        const numberOfEmoticons = this.#getNumberOfEmoticons(text, emoticon)
        if (numberOfEmoticons > 0) {
          for (let i = 1; i <= numberOfEmoticons; i++) {
            const index = this.getAllEmojisAndTags().findIndex(element => element.emoticon === emoticonVariations)
            text = text.replace(emoticon, this.getAllEmojisAndTags()[index].emoji)
          }
        }
      }
    }
    return text
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
      emojisArray = this.searchForMatchingEmojis(text)
    }
    return emojisArray
  }

  /**
   * Searches for matching emojis.
   *
   * @param {*} text Text.
   * @returns {*} Emojis.
   */
  searchForMatchingEmojis (text) {
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
   * Gets all emoticons of the emojis that have an emoticon.
   *
   * @returns {Array} An array with emoticons.
   */
  #getAllEmoticons () {
    return (this.getAllEmojisAndTags()
      .filter(element => element.emoticon))
      .map(element => element.emoticon)
  }

  // https://stackabuse.com/javascript-how-to-count-the-number-of-substring-occurrences-in-a-string/
  /**
   * Counts how many of one emoticon is in a text.
   *
   * @param {*} text The text that is searched
   * @param {*} emoticon The emoticon to check for.
   * @returns {number} The count.
   */
  #getNumberOfEmoticons (text, emoticon) {
    return text.split(emoticon).length - 1
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
