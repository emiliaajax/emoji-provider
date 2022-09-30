import { EmojiLibraryRaw } from './EmojiLibraryRaw.js'
import { activity } from './emojis/activity.js'
import { animalsAndNature } from './emojis/animalsAndNature.js'
import { foodAndDrink } from './emojis/foodAndDrink.js'
import { objects } from './emojis/objects.js'
import { smileysAndEmotion } from './emojis/smileysAndEmotion.js'
import { travelAndPlaces } from './emojis/travelAndPlaces.js'
import { flags } from './emojis/flags.js'

/**
 * Represents a class.
 *
 * @class
 */
export class EmojiLibrary {
  #rawEmojiObjectsArray
  #emojiLibraryRaw

  #categories = {
    smileysAndEmotion,
    animalsAndNature,
    foodAndDrink,
    activity,
    travelAndPlaces,
    objects,
    flags
  }

  /**
   * Creates an instance of type EmojiLibrary.
   */
  constructor () {
    this.#emojiLibraryRaw = new EmojiLibraryRaw()
    this.#rawEmojiObjectsArray = this.#emojiLibraryRaw.getAllEmojiObjects
  }

  /**
   * Gets all emojis and corresponding tags.
   *
   * @returns {object[]} All emojis with corresponding tags.
   */
  getAllEmojisAndTags () {
    return this.#convertCodePointsToEmojis(this.#rawEmojiObjectsArray)
  }

  /**
   * Returns an array with emojis only.
   *
   * @returns {object[]} An array with emojis only.
   */
  getEmojis () {
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
  getAllTags = () => {
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
  getEmojisAndTagsByCategory (...categories) {
    let emojisAndTags = []
    for (const category of categories) {
      if (this.#isCategoryExisting(category)) {
        emojisAndTags = this.#convertCodePointsToEmojis(this.#categories[category])
      } else {
        throw new TypeError(`The category named "${category}" does not exist. Please provide a valid category.`)
      }
    }
    return emojisAndTags
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
   * Gets emoticon with tag name.
   *
   * @param {string} tag The tag of the emoticon.
   * @returns {string} The emoticon.
   */
  getEmojiByTag (tag) {
    const emoji = this.#getEmojiFromTag()

    if (!this.#wasEmojiFound(emoji)) {
      throw new TypeError('Sorry, it does not a exist an emoji with given tag!')
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
    const allEmojisAndTags = this.getAllEmojisAndTags()
    const emojisArray = []
    if (text.length > 0) {
      for (let i = 0; i < allEmojisAndTags.length; i++) {
        if (text === allEmojisAndTags[i].tag?.slice(0, text.length)) {
          emojisArray.push(allEmojisAndTags[i].emoji)
        }
      }
    }
    return emojisArray
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
   * Checks if input is a valid category.
   *
   * @param {string} category The category to be checked.
   * @returns {boolean} True if category exists, false otherwise.
   */
  #isCategoryExisting (category) {
    let categoryExists = false
    for (const existingCategory of Object.keys(this.#categories)) {
      if (category === existingCategory) {
        categoryExists = true
      }
    }
    return categoryExists
  }

  /**
   * Gets all emoticons of the emojis that have an emoticon.
   *
   * @returns {Array} An array with emoticons.
   */
  #getAllEmoticons () {
    const allEmojisAndTags = this.getAllEmojisAndTags()
    const emoticonArray = []
    for (let i = 0; i < allEmojisAndTags.length; i++) {
      if (allEmojisAndTags[i].emoticon) {
        emoticonArray.push(allEmojisAndTags[i].emoticon)
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
  #getNumberOfEmoticons (text, emoticon) {
    return text.split(emoticon).length - 1
  }

  /**
   * Finds emoji from tag.
   *
   * @param {string} tag The tag to find emoji for.
   * @returns {string} The emoji matching the tag.
   */
  #getEmojiFromTag (tag) {
    let emoji = ''
    for (let i = 0; i < this.getAllEmojisAndTags().length; i++) {
      if (this.getAllEmojisAndTags()[i].tag === tag) {
        emoji = this.getAllEmojisAndTags()[i].emoji
      }
    }
    return emoji
  }

  /**
   * Returns true if emoji was found, false otherwise.
   *
   * @param {*} emoji Emoji to check.
   * @returns {*} True or false.
   */
  #wasEmojiFound (emoji) {
    return emoji.length === 0
  }

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
