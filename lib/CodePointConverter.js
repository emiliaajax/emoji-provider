
export class CodePointConverter {
  /**
   * Returns tags and emojis.
   *
   * @param {*} tagsAndCodePoints
   * @returns {*}
   */
  allCodePointsToEmojis (tagsAndCodePoints) {
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
   * @param {*} codePointsArray
   * @returns {string}
   */
  #getEmojiFromCodePoint (codePointsArray) {
    let emoji = ''
    for (const codePoint of codePointsArray) {
      emoji += String.fromCodePoint(codePoint)
    }
    return emoji
  }
}
