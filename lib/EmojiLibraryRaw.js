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

  /**
   * Returns an array with all emoji objects.
   *
   * @returns {object[]} An array with all emoji objects.
   */
  get getAllEmojiObjects () {
    return this.#allEmojiObjectsRaw.flat()
  }
}
