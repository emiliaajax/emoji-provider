import { SmileysEmotionCategory } from '../lib/SmileysEmotionCategory.js'
import { ActivityCategory } from '../lib/ActivityCategory.js'
import { AnimalsNatureCategory } from '../lib/AnimalsNatureCategory.js'
import { FoodDrinkCategory } from '../lib/FoodDrinkCategory.js'
import { ObjectsCategory } from '../lib/ObjectsCategory.js'
import { TravelPlacesCategory } from '../lib/TravelPlacesCategory.js'
import { FlagsCategory } from '../lib/FlagsCategory.js'
import { SymbolsCategory } from '../lib/SymbolsCategory.js'
import { PeopleBodyCategory } from '../lib/PeopleBodyCategory.js'
import { UnicodeConverter } from '../lib/UnicodeConverter.js'

export class Helper {
  ERROR_MESSAGE_EMOJI_NOT_EXISTING = 'Sorry, it does not a exist an emoji with given tag!'
  ERROR_MESSAGE_INVALID_ARGUMENT = 'Argument must be an array with object literals. The objects must have "tag" and "emoji" properties where the "emoji" property must hold an array of strings.'
  ERROR_MESSAGE_NOT_VALID_CATEGORY = 'The category named "nonExistingCategory" does not exist. Please provide a valid category.'
  #converter

  constructor () {
    this.#converter = new UnicodeConverter()
    this.allEmojiObjectsArray = this.#converter.convertUnicodesToEmojis(
      [
        new SmileysEmotionCategory().getEmojis, 
        new PeopleBodyCategory().getEmojis, 
        new AnimalsNatureCategory().getEmojis, 
        new FoodDrinkCategory().getEmojis, 
        new ActivityCategory().getEmojis, 
        new TravelPlacesCategory().getEmojis, 
        new ObjectsCategory().getEmojis, 
        new SymbolsCategory().getEmojis, 
        new FlagsCategory().getEmojis
    ].flat())
  }

  /**
   * @returns [object[]]
   */
  emojisAndTagsArray () {
    return this.allEmojiObjectsArray.map(element => {
      return {
        tag: element.tag,
        emoji: element.emoji
      }
    })
  }

  /**
   * @returns [object[]]
   */
  emojisByCategoriesArray () {
    const emojiObjects = this.#converter.convertUnicodesToEmojis(
    [new SmileysEmotionCategory().getEmojis, new ActivityCategory().getEmojis].flat())
    return emojiObjects.map(element => {
      return {
        tag: element.tag,
        emoji: element.emoji
      }
    })
  }
  
  /**
   * @returns [string[]]
   */
  emojisOnlyArray (array) {
    return array.map(element => { 
      return element.emoji
    })
  }
}
