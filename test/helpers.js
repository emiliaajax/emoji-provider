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
export const converter = new UnicodeConverter()

export const ERROR_MESSAGE_EMOJI_NOT_EXISTING = 'Sorry, it does not a exist an emoji with given tag!'
export const ERROR_MESSAGE_NOT_VALID_CATEGORY = 'The category named "nonExistingCategory" does not exist. Please provide a valid category.'
export const ERROR_MESSAGE_INVALID_ARGUMENT = 'Argument must be an object literal with at least properties "tag" and "emoji" where the emoji property must hold an array of strings'

export const allEmojisArray = converter.convertUnicodesToEmojis(
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

export const emojisByCategoriesArray = converter.convertUnicodesToEmojis(
  [new SmileysEmotionCategory().getEmojis, new ActivityCategory().getEmojis].flat())

export const emojisOnlyArray = (array) => {
  return array.map(element => { 
    return element.emoji
  })
}

export const tagsOnlyArray = () => {
  return allEmojisArray.map(element => {
    return element.tag
  })
}