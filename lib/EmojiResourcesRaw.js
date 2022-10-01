import { ActivityCategory } from './resources/ActivityCategory.js'
import { AnimalsNatureCategory } from './resources/AnimalsNatureCategory.js'
import { FlagsCategory } from './resources/FlagsCategory.js'
import { FoodDrinkCategory } from './resources/FoodDrinkCategory.js'
import { ObjectsCategory } from './resources/ObjectsCategory.js'
import { PeopleBodyCategory } from './resources/PeopleAndBodyCategory.js'
import { SmileysEmotionCategory } from './resources/SmileysEmotionCategory.js'
import { SymbolsCategory } from './resources/SymbolsCategory.js'
import { TravelPlacesCategory } from './resources/TravelPlacesCategory.js'

/**
 * Represent a class.
 */
export class EmojiResourcesRaw {
  #activityCategory
  #animalsNatureCategory
  #flagsCategory
  #foodDrinkCategory
  #ojectsCategory
  #peopleBodyCategory
  #smileysEmotionCategory
  #symbolsCategory
  #travelPlacesCategory

  #allEmojiObjectsRaw = []
  #emojiCategories

  /**
   * Instanse.
   */
  constructor () {
    this.#activityCategory = new ActivityCategory()
    this.#animalsNatureCategory = new AnimalsNatureCategory()
    this.#flagsCategory = new FlagsCategory()
    this.#foodDrinkCategory = new FoodDrinkCategory()
    this.#ojectsCategory = new ObjectsCategory()
    this.#peopleBodyCategory = new PeopleBodyCategory()
    this.#smileysEmotionCategory = new SmileysEmotionCategory()
    this.#symbolsCategory = new SymbolsCategory()
    this.#travelPlacesCategory = new TravelPlacesCategory()

    this.#emojiCategories = {
      smileysAndEmotion: this.#smileysEmotionCategory.getEmojis,
      peopleAndBody: this.#peopleBodyCategory.getEmojis,
      animalsAndNature: this.#animalsNatureCategory.getEmojis,
      foodAndDrink: this.#foodDrinkCategory.getEmojis,
      activity: this.#activityCategory.getEmojis,
      travelAndPlaces: this.#travelPlacesCategory.getEmojis,
      objects: this.#ojectsCategory.getEmojis,
      flags: this.#flagsCategory.getEmojis
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
