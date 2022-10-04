
export class EmoticonTranslator {
  #allEmojisAndTags
  #allEmojiObjectsWithEmoticons
  #currentEmoticon
  #currentEmoji
  #text

  /**
   * @param {object[]} emojiObjectArray
   */
  constructor (emojiObjectArray) {
    this.#allEmojisAndTags = emojiObjectArray
    this.#allEmojiObjectsWithEmoticons = this.#getAllEmojiObjectsContainingEmoticons()
  }

  /**
   * 
   * @param {string} text
   * @returns {string}
   */
  replaceAllEmoticonsWithEmojis (text) {
    this.#text = text
    this.replaceAllEmoticons()
    return this.#text
  }

  replaceAllEmoticons () {
    for (const emojiObject of this.#allEmojiObjectsWithEmoticons) {
      this.#searchTextAndReplace(emojiObject)
    }
  }

  /**
   * Checks text and replaces.
   *
   * @param {*} emojiObject test.
   */
  #searchTextAndReplace (emojiObject) {
    this.#currentEmoji = emojiObject.emoji
    for (const emoticon of emojiObject.emoticon) {
      this.#currentEmoticon = emoticon
      const occurrences = this.#getNumberOfEmoticons()
      if (occurrences > 0) {
        this.#replaceAllWithEmoji(occurrences)
      }
    }
  }

  /**
   * Test.
   *
   * @param {*} occurrences Test
   */
  #replaceAllWithEmoji (occurrences) {
    for (let i = 1; i <= occurrences; i++) {
      this.#text = this.#text.replace(this.#currentEmoticon, this.#currentEmoji)
    }
  }

  /**
   * Gets all emoticons of the emojis that have an emoticon.
   *
   * @returns {*} Array.
   */
  #getAllEmojiObjectsContainingEmoticons () {
    return (this.#allEmojisAndTags
      .filter(element => element.emoticon))
  }

  // https://stackabuse.com/javascript-how-to-count-the-number-of-substring-occurrences-in-a-string/
  /**
   * Counts how many of one emoticon is in a text.
   *
   * @returns {number} The count.
   */
  #getNumberOfEmoticons () {
    return this.#text.split(this.#currentEmoticon).length - 1
  }
}
