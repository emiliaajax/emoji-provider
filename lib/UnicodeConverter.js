
const ERROR_MESSAGE_INVALID_ARGUMENT = 'Argument must be an array with object literals. The objects must have "tag" and "emoji" properties where the "emoji" property must hold an array of strings.'

export class UnicodeConverter {
  /**
   * @param {object[]} emojiObjectArray An array of emoji objects.
   * @returns {object[]} The converted array.
   */
  convertUnicodesToEmojis (emojiObjectArray) {
    this.#validateArray(emojiObjectArray)
    this.#validateProperties(emojiObjectArray)

    return emojiObjectArray.map(element => {
      const emojiObject = {
        tag: element.tag,
        emoji: this.#getEmojiFromUnicode(element.emoji),
        emoticon: element.emoticon
      }
      return emojiObject
    })
  }

  /**
   * @param {Array} emojiObjectArray
   * @throws {TypeError}
   */
  #validateArray (emojiObjectArray) {
    if (!Array.isArray(emojiObjectArray)) {
      throw new TypeError(ERROR_MESSAGE_INVALID_ARGUMENT)
    }
  }

  /**
   * @param {object[]} emojiObjectArray
   */
  #validateProperties (emojiObjectArray) {
    for (const emojiObject of emojiObjectArray) {
      if (emojiObject.emoji === undefined || emojiObject.tag === undefined) {
        throw new TypeError(ERROR_MESSAGE_INVALID_ARGUMENT)
      }
    }
  }

  /**
   * @param {string[]} unicodes
   * @returns {string}
   */
  #getEmojiFromUnicode (unicodes) {
    let emoji = ''
    for (const unicode of unicodes) {
      emoji += String.fromCodePoint(unicode)
    }
    return emoji
  }
}
