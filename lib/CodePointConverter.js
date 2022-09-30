/**
 * Represents class.
 */
export class CodePointConverter {
  /**
   * Returns tags and emojis.
   *
   * @param {*} tagsAndCodePoints The tags and code points to convert.
   * @returns {*} The converted array.
   */
  #convertCodePointsToEmojis (tagsAndCodePoints) {
    const tagsAndEmojis = []
    for (const tagAndEmojiCodePoint of tagsAndCodePoints) {
      const tagAndEmoji = {
        tag: tagAndEmojiCodePoint.tag,
        emoji: this.#getEmojiFromCodePoint(tagAndEmojiCodePoint.emoji),
        emoticon: tagAndEmojiCodePoint.emoticon
      }
      tagsAndEmojis.push(tagAndEmoji)
    }
    return tagsAndEmojis
  }

  /**
   * Converts a code point to an emoji image.
   *
   * @param {*} codePointsArray An array with all the codepoints representing the emoji.
   *
   * @returns {string} An emoji image.
   */
  #getEmojiFromCodePoint (codePointsArray) {
    let emoji = ''

    for (const codePoint of codePointsArray) {
      emoji += String.fromCodePoint(codePoint)
    }

    return emoji
  }
}
