import { SmileysEmotionCategory } from '../lib/emojis/SmileysEmotionCategory'
import { ActivityCategory } from '../lib/emojis/ActivityCategory.js'
import { AnimalsNatureCategory } from '../lib/emojis/AnimalsNatureCategory.js'
import { FoodDrinkCategory } from '../lib/emojis/FoodDrinkCategory.js'
import { ObjectsCategory } from '../lib/emojis/ObjectsCategory.js'
import { TravelPlacesCategory } from '../lib/emojis/TravelPlacesCategory.js'
import { FlagsCategory } from '../lib/emojis/FlagsCategory.js'
import { SymbolsCategory } from '../lib/emojis/SymbolsCategory.js'
import { PeopleBodyCategory } from '../lib/emojis/PeopleBodyCategory.js'

describe('Call to method in AnimalsNatureCategory should return an array', () => {
  test('Checking if output is array should return true', () => {
    expect(Array.isArray(new AnimalsNatureCategory().getEmojis)).toBe(true)
  })
})

describe('Call to method in SmileysEmotionCategory should return an array', () => {
  test('Checking if output is array should return true', () => {
    expect(Array.isArray(new SmileysEmotionCategory().getEmojis)).toBe(true)
  })
})

describe('Call to method in ActivityCategory should return an array', () => {
  test('Checking if output is array should return true', () => {
    expect(Array.isArray(new ActivityCategory().getEmojis)).toBe(true)
  })
})

describe('Call to method in FoodDrinkCategory should return an array', () => {
  test('Checking if output is array should return true', () => {
    expect(Array.isArray(new FoodDrinkCategory().getEmojis)).toBe(true)
  })
})

describe('Call to method in ObjectsCategory should return an array', () => {
  test('Checking if output is array should return true', () => {
    expect(Array.isArray(new ObjectsCategory().getEmojis)).toBe(true)
  })
})

describe('Call to method in TravelPlacesCategory should return an array', () => {
  test('Checking if output is array should return true', () => {
    expect(Array.isArray(new TravelPlacesCategory().getEmojis)).toBe(true)
  })
})

describe('Call to method in FlagsCategory should return an array', () => {
  test('Checking if output is array should return true', () => {
    expect(Array.isArray(new FlagsCategory().getEmojis)).toBe(true)
  })
})

describe('Call to method in SymbolsCategory should return an array', () => {
  test('Checking if output is array should return true', () => {
    expect(Array.isArray(new SymbolsCategory().getEmojis)).toBe(true)
  })
})

describe('Call to method in TravelPlacesCategory should return an array', () => {
  test('Checking if output is array should return true', () => {
    expect(Array.isArray(new PeopleBodyCategory().getEmojis)).toBe(true)
  })
})
