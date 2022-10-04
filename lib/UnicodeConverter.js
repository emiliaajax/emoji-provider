
export class UnicodeConverter {
  /**
   * @param {object[]} emojiObjectArray An array of emoji objects.
   * @returns {object[]} The converted array.
   */
  convertUnicodesToEmojis (emojiObjectArray) {
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
}
