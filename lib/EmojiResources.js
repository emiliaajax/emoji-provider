import { ActivityCategory } from './emojis/ActivityCategory.js'
import { AnimalsNatureCategory } from './emojis/AnimalsNatureCategory.js'
import { FlagsCategory } from './emojis/FlagsCategory.js'
import { FoodDrinkCategory } from './emojis/FoodDrinkCategory.js'
import { ObjectsCategory } from './emojis/ObjectsCategory.js'
import { PeopleBodyCategory } from './emojis/PeopleBodyCategory.js'
import { SmileysEmotionCategory } from './emojis/SmileysEmotionCategory.js'
import { SymbolsCategory } from './emojis/SymbolsCategory.js'
import { TravelPlacesCategory } from './emojis/TravelPlacesCategory.js'

export class EmojiResources {
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
      symbols: this.#symbolsCategory.getEmojis,
      flags: this.#flagsCategory.getEmojis
    }
  }

  /**
   * @returns {object[]} Array with all emoji objects.
   */
  getEmojiObjectsUnconverted () {
    for (const emojiCategory of Object.values(this.#emojiCategories)) {
      this.#allEmojiObjectsRaw.push(emojiCategory)
    }

    return this.#allEmojiObjectsRaw.flat()
  }

  /**
   * The valid input categories are: activity, animalsAndNature, flags, foodAndDrink, objects, peopleAndBody, smileysAndEmotion, symbols and travelAndPlaces. OBS! The spelling must be exact.
   *
   * @param  {...string} emojiCategories
   * @returns {object[]} An array with emoji objects.
   */
  getEmojiObjectsByCategoryUnconverted (...emojiCategories) {
    const emojiObjects = []

    for (const category of emojiCategories) {
      this.#validateCategory(category)
      emojiObjects.push(this.#emojiCategories[category])
    }

    return emojiObjects.flat()
  }

  /**
   * @param {string} category
   * @throws {TypeError}
   */
  #validateCategory (category) {
    if (!this.#isValidCategory(category)) {
      throw new TypeError(`The category named "${category}" does not exist. Please provide a valid category.`)
    }
  }

  /**
   * @param {string} category
   * @returns {boolean}
   */
  #isValidCategory (category) {
    return Object.keys(this.#emojiCategories).includes(category)
  }
}
