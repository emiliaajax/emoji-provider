import { activity } from './emojis/activity.js'
import { animalsAndNature } from './emojis/animalsAndNature.js'
import { foodAndDrink } from './emojis/foodAndDrink.js'
import { objects } from './emojis/objects.js'
import { smileysAndEmotion } from './emojis/smileysAndEmotion.js'
import { travelAndPlaces } from './emojis/travelAndPlaces.js'

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
    objects
  }

  /**
   * Returns an array with all emojis with corresponding tags.
   *
   * @returns {object[]} An array with all emojis with corresponding tags.
   */
  getAllEmojisAndTags () {
    return [
      smileysAndEmotion,
      animalsAndNature,
      foodAndDrink,
      activity,
      travelAndPlaces,
      objects
    ].flat()
  }

  /**
   * Returns an array with emojis only.
   *
   * @returns {object[]} An array with emojis only.
   */
  getAllEmojis () {
    const emojisAndTags = this.getAllEmojisAndTags()
    const emojisOnly = []
    for (let i = 0; i < emojisAndTags.length; i++) {
      const emojiUnicodes = emojisAndTags[i].emoji
      console.log(i)
      let emoji = ''
      for (let j = 0; j < emojiUnicodes.length; j++) {
        emoji += String.fromCodePoint(emojiUnicodes[j])
      }
      emojisOnly.push(emoji)
    }
    return emojisOnly
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
    const emojis = []
    for (let i = 0; i < categories.length; i++) {
      if (this.#checkIfCategoryExists(categories[i])) {
        emojis.push(this.#categories[categories[i]])
      } else {
        throw new TypeError(`The category named "${categories[i]}" does not exist. Please provide a valid category.`)
      }
    }
    return emojis.flat()
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

  // replaceEmoticonWithUnicode (text) {
  //   const allEmojisAndTags = this.getAllEmojisAndTags()
  //   const emoticons = this.#getAllEmoticons()
  //   for (let i = 0; i < emoticons.length; i++) {
  //     const emoticon = emoticons[i]
  //     const count = this.#countEmoticonOccurences(text, emoticon)
  //     if (count > 0) {
  //       for (let i = 1; i <= count; i++) {
  //         const index = allEmojisAndTags.findIndex(element => element.emoticon === emoticon)
  //         const emoji = String.fromCodePoint(`0x${allEmojisAndTags[index].unicode}`)
  //         text = text.replace(emoticon, emoji)
  //       }
  //     }
  //   }
  //   return text
  // }

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
      const emoticon = emoticons[i]
      const count = this.#countEmoticonOccurences(text, emoticon)
      if (count > 0) {
        for (let i = 1; i <= count; i++) {
          const index = allEmojisAndTags.findIndex(element => element.emoticon === emoticon)
          text = text.replace(emoticon, allEmojisAndTags[index].emoji)
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
    const textLength = text.length
    const emojisArray = []
    if (textLength > 0) {
      for (let i = 0; i < allEmojisAndTags.length; i++) {
        if (text === allEmojisAndTags[i].tag?.slice(0, textLength)) {
          emojisArray.push(allEmojisAndTags[i].emoji)
        }
      }
    }
    return emojisArray
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
