import { activity } from './emojis/activity.js'
import { animalsAndNature } from './emojis/animalsAndNature.js'
import { foodAndDrink } from './emojis/foodAndDrink.js'
import { objects } from './emojis/objects.js'
import { smileysAndPeople } from './emojis/smileysAndPeople.js'
import { travelAndPlaces } from './emojis/travelAndPlaces.js'

/**
 * Represents emojis.
 *
 * @class
 */
export class EmojiLibrary {
  static #categories = {
    smileysAndPeople,
    animalsAndNature,
    foodAndDrink,
    activity,
    travelAndPlaces,
    objects
  }

  /**
   * Returns all emoji objects in an array.
   *
   * @returns {object[]} An array with all emoji objects.
   */
  static getAll () {
    return [
      smileysAndPeople,
      animalsAndNature,
      foodAndDrink,
      activity,
      travelAndPlaces,
      objects
    ].flat()
  }

  /**
   * Gets emojis belonging to given categories.
   *
   * @param  {...string} categories The categories to get emojis for.
   * @returns {object[]} An array with emoji object belonging to given categories.
   */
  static getByCategory (...categories) {
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
   * Checks if input is a valid category.
   *
   * @param {string} category The category to be checked.
   * @returns {boolean} True if category exists, false otherwise.
   */
  static #checkIfCategoryExists (category) {
    let categoryExists = false
    const categoryNames = Object.keys(this.#categories)
    for (let i = 0; i < categoryNames.length; i++) {
      if (category === categoryNames[i]) {
        categoryExists = true
      }
    }
    return categoryExists
  }
}
