
const ERROR_MESSAGE_INVALID_ARGUMENT = 'Argument must be an array with object literals. The objects must have "tag" and "emoji" properties where the "emoji" property must hold an array of strings.'

export class UnicodeConverter {
  /**
   * @param {object[]} emojiObjectArray An array of emoji objects.
   * @returns {object[]} The converted array.
   */
  convertUnicodesToEmojis (emojiObjectArray) {
    this.#validateInput(emojiObjectArray)
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

  /**
   * Throws a TypeError if input is not of type object.
   * 
   * @param {object[]} emojiObjectArray 
   * @throws {TypeError}
   */
  #validateInput (emojiObjectArray) {
    if (typeof emojiObjectArray !== 'object') {
      throw new TypeError(ERROR_MESSAGE_INVALID_ARGUMENT)
    }
  }
}
