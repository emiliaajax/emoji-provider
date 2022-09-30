import { activity } from './emojis/activity.js'
import { animalsAndNature } from './emojis/animalsAndNature.js'
import { foodAndDrink } from './emojis/foodAndDrink.js'
import { objects } from './emojis/objects.js'
import { smileysAndEmotion } from './emojis/smileysAndEmotion.js'
import { travelAndPlaces } from './emojis/travelAndPlaces.js'
import { flags } from './emojis/flags.js'

/**
 * Represent a class.
 */
export class EmojiLibraryRaw {
  #allEmojiObjectsRaw = [
    smileysAndEmotion,
    animalsAndNature,
    foodAndDrink,
    activity,
    travelAndPlaces,
    objects,
    flags
  ]

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
   * Returns an array with all emoji objects.
   *
   * @returns {object[]} An array with all emoji objects.
   */
  get getAllEmojiObjects () {
    return this.#allEmojiObjectsRaw.flat()
  }

  /**
   * Gets emojis belonging to given categories.
   *
   * @param  {...string} categories The categories to get emojis for.
   * @returns {object[]} An array with emoji object belonging to given categories.
   */
  getEmojisAndTagsByCategory (...categories) {
    const emojisAndTags = []
    for (const category of categories) {
      if (this.#isCategoryExisting(category)) {
        emojisAndTags.push(this.#categories[category])
      } else {
        throw new TypeError(`The category named "${category}" does not exist. Please provide a valid category.`)
      }
    }
    return emojisAndTags.flat()
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
}
