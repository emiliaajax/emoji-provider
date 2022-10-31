
export class EmoticonConverter {
  #emojiObjectArray
  #allEmojiObjectsWithEmoticons
  #currentEmoticon
  #currentEmoji
  #text

  /**
   * @param {object[]} emojiObjectArray
   */
  constructor (emojiObjectArray) {
    this.#emojiObjectArray = emojiObjectArray
    this.#allEmojiObjectsWithEmoticons = this.#getAllEmojiObjectsContainingEmoticons()
  }

  /**
   * @param {string} text
   * @returns {string}
   */
  replaceAllEmoticonsWithEmojis (text) {
    this.#text = text

    for (const emojiObject of this.#allEmojiObjectsWithEmoticons) {
      this.#checkIfPresentAndReplace(emojiObject)
    }

    return this.#text
  }

  /**
   * Checks if the emoticon belonging to the emoji object is present in text. If present, all occurences will be replaced.
   *
   * @param {object} emojiObject
   */
  #checkIfPresentAndReplace (emojiObject) {
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
   * @param {number} occurrences How many times the same emoticon occurs in the text.
   */
  #replaceAllWithEmoji (occurrences) {
    for (let i = 1; i <= occurrences; i++) {
      this.#text = this.#text.replace(this.#currentEmoticon, this.#currentEmoji)
    }
  }

  /**
   * @returns {object[]}
   */
  #getAllEmojiObjectsContainingEmoticons () {
    return (this.#emojiObjectArray
      .filter(element => element.emoticon))
  }

  /**
   * Counts how many times the same emoticon occurs in the text. Inspired by:
   * https://stackabuse.com/javascript-how-to-count-the-number-of-substring-occurrences-in-a-string/
   *
   * @returns {number}
   */
  #getNumberOfEmoticons () {
    return this.#text.split(this.#currentEmoticon).length - 1
  }
}
