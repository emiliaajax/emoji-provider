
export class EmoticonTranslator {
  #allEmojisAndTags
  #allEmojiObjectsWithEmoticons
  #currentEmoticon
  #currentEmoji
  #text

  /**
   * @param {*} emojiObjectArray Hej.
   */
  constructor (emojiObjectArray) {
    this.#allEmojisAndTags = emojiObjectArray
    this.#allEmojiObjectsWithEmoticons = this.#getAllEmojiObjectsContainingEmoticons()
  }

  /**
   * Replaces an emoticon with an emoji.
   *
   * @param {string} text Text to be searched for emojis.
   * @returns {string} The text with the emoticons replaced with emojis.
   */
  replaceEmoticonsWithEmojisInText (text) {
    this.#text = text
    for (const emojiObject of this.#allEmojiObjectsWithEmoticons) {
      this.#checkTextAndReplace(emojiObject)
    }
    return this.#text
  }

  /**
   * Checks text and replaces.
   *
   * @param {*} emojiObject test.
   */
  #checkTextAndReplace (emojiObject) {
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
