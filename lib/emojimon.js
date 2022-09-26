import { EmojiLibrary } from './emojiLibrary.js'

/**
 * Represents a class.
 *
 * @class
 */
export class Emojimon {
  #allEmojisAndTags = EmojiLibrary.getAll()

  /**
   * Returns an array with all emojis with corresponding tags.
   *
   * @returns {object[]} An array with all emojis with corresponding tags.
   */
  getAllEmojisAndTags () {
    return this.#allEmojisAndTags
  }

  /**
   * Gets emojis with corresponding tags from categories.
   *
   * @param  {...any} categories The categories.
   * @returns {object[]} An array with the emojis from the categories.
   */
  getEmojisAndTagsByCategory (...categories) {
    return EmojiLibrary.getByCategory(...categories)
  }

  /**
   * Get emojis only from category.
   *
   * @param  {...any} categories The categories.
   * @returns {string[]} An array with emojis from categories.
   */
  getEmojisOnlyFromCategory (...categories) {
    const emojis = []
    const emojisAndTags = this.getEmojisAndTagsByCategory(...categories)
    for (let i = 0; i < emojisAndTags.length; i++) {
      emojis.push(emojisAndTags[i].emoji)
    }
    return emojis
  }

  /**
   * Returns an array with emojis only.
   *
   * @returns {object[]} An array with emojis only.
   */
  getEmojisOnly () {
    const emojisAndTags = EmojiLibrary.getAll()
    const emojisOnly = []
    for (let i = 0; i < emojisAndTags.length; i++) {
      emojisOnly.push(emojisAndTags[i].emoji)
    }
    return emojisOnly
  }

  /**
   * Gets emoticon with tag name.
   *
   * @param {*} tag The tag of the emoticon.
   * @returns {string} The emoticon.
   */
  getEmojiByTag (tag) {
    let emoji = 'Sorry, an emoji with given tag does not exist...'
    for (let i = 0; i < this.#allEmojisAndTags.length; i++) {
      if (this.#allEmojisAndTags[i].tag === tag) {
        emoji = this.#allEmojisAndTags[i].emoji
      }
    }
    return emoji
  }

  /**
   * Replaces an emoticon with an emoji.
   *
   * @param {string} text Text to be searched for emojis.
   * @returns {string} The text with the emoticons replaced with emojis.
   */
  replaceEmoticonWithEmoji (text) {
    const emoticons = this.#getAllEmoticons()
    for (let i = 0; i < emoticons.length; i++) {
      const emoticon = emoticons[i]
      const count = this.#countEmoticonOccurences(text, emoticon)
      if (count > 0) {
        for (let i = 1; i <= count; i++) {
          const index = this.#allEmojisAndTags.findIndex(element => element.emoticon === emoticon)
          text = text.replace(emoticon, this.#allEmojisAndTags[index].emoji)
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
    const textLength = text.length
    const emojisArray = []
    if (textLength > 0) {
      for (let i = 0; i < this.#allEmojisAndTags.length; i++) {
        if (text === this.#allEmojisAndTags[i].tag?.slice(0, textLength)) {
          emojisArray.push(this.#allEmojisAndTags[i].emoji)
        }
      }
    }
    return emojisArray
  }

  /**
   * Gets all emoticons of the emojis that have an emoticon.
   *
   * @returns {Array} An array with emoticons.
   */
  #getAllEmoticons () {
    const emoticonArray = []
    for (let i = 0; i < this.#allEmojisAndTags.length; i++) {
      if (this.#allEmojisAndTags[i].emoticon) {
        emoticonArray.push(this.#allEmojisAndTags[i].emoticon)
      }
    }
    return emoticonArray
  }

  // https://stackabuse.com/javascript-how-to-count-the-number-of-substring-occurrences-in-a-string/
  /**
   * Counts how many of one emoticon is in a text.
   *
   * @param {*} text The text that is searched
   * @param {*} emoticon The emoticon to check for.
   * @returns {number} The count.
   */
  #countEmoticonOccurences (text, emoticon) {
    return text.split(emoticon).length - 1
  }
}
