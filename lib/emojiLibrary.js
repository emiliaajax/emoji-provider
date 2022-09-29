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
   * Returns an array with all emojis with corresponding tags.
   *
   * @returns {object[]} An array with all emojis with corresponding tags.
   */
  getAllEmojisAndTags () {
    const allTagsAndEmojiCodePoints = [
      smileysAndEmotion,
      animalsAndNature,
      foodAndDrink,
      activity,
      travelAndPlaces,
      objects,
      flags
    ].flat()

    const allEmojisAndTags = []

    for (const tagAndEmojiCodePoint of allTagsAndEmojiCodePoints) {
      let emoji = ''

      for (const codePoint of tagAndEmojiCodePoint.emoji) {
        emoji += String.fromCodePoint(codePoint)
      }

      const emojiAndTag = {
        tag: tagAndEmojiCodePoint.tag,
        emoji,
        emoticon: tagAndEmojiCodePoint.emoticon
      }

      allEmojisAndTags.push(emojiAndTag)
    }

    return allEmojisAndTags
  }

  /**
   * Returns an array with emojis only.
   *
   * @returns {object[]} An array with emojis only.
   */
  getAllEmojis () {
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
    const emojisAndTags = []
    for (let i = 0; i < categories.length; i++) {
      if (this.#checkIfCategoryExists(categories[i])) {
        emojisAndTags.push(this.#categories[categories[i]])
      } else {
        throw new TypeError(`The category named "${categories[i]}" does not exist. Please provide a valid category.`)
      }
    }
    return emojisAndTags.flat()
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
   * @param {*} tag The tag of the emoticon.
   * @returns {string} The emoticon.
   */
  getEmojiByTag (tag) {
    const allEmojisAndTags = this.getAllEmojisAndTags()
    let emoji = 'Sorry, an emoji with given tag does not exist...'
    for (let i = 0; i < allEmojisAndTags.length; i++) {
      if (allEmojisAndTags[i].tag === tag) {
        emoji = allEmojisAndTags[i].emoji
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
    const allEmojisAndTags = this.getAllEmojisAndTags()
    const emoticons = this.#getAllEmoticons()
    for (let i = 0; i < emoticons.length; i++) {
      const emoticonVariations = emoticons[i]
      for (const emoticon of emoticonVariations) {
        const count = this.#countEmoticonOccurences(text, emoticon)
        if (count > 0) {
          for (let i = 1; i <= count; i++) {
            const index = allEmojisAndTags.findIndex(element => element.emoticon === emoticonVariations)
            text = text.replace(emoticon, allEmojisAndTags[index].emoji)
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
  isSupportedEmoji (emoji) {
    const ctx = document.createElement('canvas').getContext('2d')
    // ctx.canvas.width = ctx.canvas.height = 1
    ctx.fillText(emoji, -4, 4)
    return ctx.getImageData(0, 0, 1, 1).data[3] > 0
  }

  /**
   * Checks if input is a valid category.
   *
   * @param {string} category The category to be checked.
   * @returns {boolean} True if category exists, false otherwise.
   */
  #checkIfCategoryExists (category) {
    let categoryExists = false
    const categoryNames = Object.keys(this.#categories)
    for (let i = 0; i < categoryNames.length; i++) {
      if (category === categoryNames[i]) {
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
  #countEmoticonOccurences (text, emoticon) {
    return text.split(emoticon).length - 1
  }
}
