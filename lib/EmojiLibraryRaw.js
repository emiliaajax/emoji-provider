import { ActivityCategory } from './emojis/ActivityCategory.js'
import { animalsAndNature } from './emojis/animalsAndNature.js'
import { foodAndDrink } from './emojis/foodAndDrink.js'
import { objects } from './emojis/objects.js'
import { smileysAndEmotion } from './emojis/smileysAndEmotion.js'
import { travelAndPlaces } from './emojis/travelAndPlaces.js'
import { flags } from './emojis/flags.js'
import { peopleAndBody } from './emojis/peopleAndBody.js'

/**
 * Represent a class.
 */
export class EmojiLibraryRaw {
  #activityCategory
  #allEmojiObjectsRaw = []
  #emojiCategories

  /**
   * Instanse.
   */
  constructor () {
    this.#activityCategory = new ActivityCategory()

    this.#emojiCategories = {
      smileysAndEmotion,
      peopleAndBody,
      animalsAndNature,
      foodAndDrink,
      activity: this.#activityCategory.getEmojis,
      travelAndPlaces,
      objects,
      flags
    }
  }

  /**
   * Returns an array with all emoji objects.
   *
   * @returns {object[]} An array with all emoji objects.
   */
  get getAllEmojiObjects () {
    for (const emojiCategory of Object.values(this.#emojiCategories)) {
      this.#allEmojiObjectsRaw.push(emojiCategory)
    }
    return this.#allEmojiObjectsRaw.flat()
  }

  /**
   * Gets emojis belonging to given categories.
   *
   * @param  {...string} emojiCategories The categories to get emojis for.
   * @returns {object[]} An array with emoji object belonging to given categories.
   */
  getEmojisAndTagsByCategory (...emojiCategories) {
    const emojisAndTags = []
    for (const category of emojiCategories) {
      this.#validateCategory(category)
      emojisAndTags.push(this.#emojiCategories[category])
    }
    return emojisAndTags.flat()
  }

  /**
   * Throws an error if category is not valid.
   *
   * @param {*} category Category.
   */
  #validateCategory (category) {
    if (!this.#isValidCategory(category)) {
      throw new TypeError(`The category named "${category}" does not exist. Please provide a valid category.`)
    }
  }

  /**
   * Checks if input is a valid category.
   *
   * @param {string} category The category to be checked.
   * @returns {boolean} True if category exists, false otherwise.
   */
  #isValidCategory (category) {
    return Object.keys(this.#emojiCategories).includes(category)
  }
}
