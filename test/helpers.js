import { SmileysEmotionCategory } from '../lib/resources/SmileysEmotionCategory.js'
import { ActivityCategory } from '../lib/resources/ActivityCategory.js'
import { AnimalsNatureCategory } from '../lib/resources/AnimalsNatureCategory.js'
import { FoodDrinkCategory } from '../lib/resources/FoodDrinkCategory.js'
import { ObjectsCategory } from '../lib/resources/ObjectsCategory.js'
import { TravelPlacesCategory } from '../lib/resources/TravelPlacesCategory.js'
import { FlagsCategory } from '../lib/resources/FlagsCategory.js'
import { SymbolsCategory } from '../lib/resources/SymbolsCategory.js'
import { PeopleBodyCategory } from '../lib/resources/PeopleAndBodyCategory.js'
import { CodePointConverter } from '../lib/CodePointConverter.js'

export const ERROR_MESSAGE_EMOJI_NOT_EXISTING = 'Sorry, it does not a exist an emoji with given tag!'
export const ERROR_MESSAGE_NOT_VALID_CATEGORY = 'The category named "noneExistingCategory" does not exist. Please provide a valid category.'
export const ERROR_MESSAGE_INVALID_ARGUMENT = 'Argument must be an object literal with at least properties "tag" and "emoji" where the emoji property must hold an array of strings'

export const converter = new CodePointConverter()

export const allEmojisArray = converter.allCodePointsToEmojis([new SmileysEmotionCategory().getEmojis, new PeopleBodyCategory().getEmojis, new AnimalsNatureCategory().getEmojis, new FoodDrinkCategory().getEmojis, new ActivityCategory().getEmojis, new TravelPlacesCategory().getEmojis, new ObjectsCategory().getEmojis, new SymbolsCategory().getEmojis, new FlagsCategory().getEmojis].flat())

export const emojisByCategoriesArray = converter.allCodePointsToEmojis([new SmileysEmotionCategory().getEmojis, new ActivityCategory().getEmojis].flat())

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