import { activity } from './emojis/activity'
import { animalsAndNature } from './emojis/animalsAndNature'
import { foodAndDrink } from './emojis/foodAndDrink'
import { objects } from './emojis/objects'
import { smileysAndPeople } from './emojis/smileysAndPeople'
import { travelAndPlaces } from './emojis/travelAndPlaces'

/**
 * Represents emojis.
 *
 * @class
 */
export class Emojis {
  #categories = ['smileysAndPeople', 'animalsAndNature', 'foodAndDrink', 'activity', 'travelAndPlaces', 'objects']
  /**
   * Returns all emoji objects in an array.
   *
   * @returns {object[]} An array with all emoji objects.
   */
  getAllEmojis () {
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
   */
  getEmojisByCategory (...categories) {
    for (let i = 0; i < categories.length; i++) {
      this.#checkIfValidCategory(categories[i])
    }
  }

  /**
   * Checks if input is a valid category.
   *
   * @param {string} category The category to be checked.
   */
  #checkIfValidCategory (category) {
    for (let i = 0; i < this.#categories.length; i++) {
      if (!category === this.#categories[i]) {
        throw new TypeError(`The category named "${category}" does not exist. Please provide a valid category.`)
      }
    }
  }
}
