import { EmojiProvider } from '../lib/EmojiProvider.js'
import * as helpers from './helpers.js'
const emojiProvider = new EmojiProvider()

describe('Get all emoji objects', () => {
  test('Call to function should return an array containing all emoji objects', () => {
    expect(emojiProvider.getAllEmojisAndTags()).toEqual(helpers.allEmojisArray)
  })
})

describe('Get emojis only', () => {
  test('Call to function should return an array containing all emoji images', () => {
    expect(emojiProvider.getAllEmojis()).toEqual(helpers.emojisOnlyArray(helpers.allEmojisArray))
  })
})

describe('Get tags only', () => {
  test('Call to function should return an array containing all emoji tags', () => {
    expect(emojiProvider.getAllTags()).toEqual(helpers.tagsOnlyArray())
  })
})

describe('Get all emoji objects from given categories', () => {
  test('Passing "smileysAndEmotion" and "activity" should return only the emojis belonging to those categories', () => {
    expect(emojiProvider.getEmojiObjectsByCategory('smileysAndEmotion', 'activity')).toEqual(helpers.emojisByCategoriesArray)
  })

  test(`Passing "noneExistingCategory" should throw an error with message ${helpers.ERROR_MESSAGE_NOT_VALID_CATEGORY}`, () => {
    function test () {
      emojiProvider.getEmojiObjectsByCategory('noneExistingCategory')
    }
    expect(test).toThrowError(helpers.ERROR_MESSAGE_NOT_VALID_CATEGORY)
  })
})

// ///// Fixa
// describe('Get emojis only from category', () => {
//   test('Call to function should return an array containing all emoji images', () => {
//     expect(emojiProvider.getEmojiObjectsByCategory('smileysAndEmotion', 'activity')).toEqual(helpers.emojisOnlyArray(helpers.emojisByCategoriesArray))
//   })
// })

describe('Get emoji from tag', () => {
  test('Passing "happy-face" should return "😀"', () => {
    expect(emojiProvider.getEmojiByTag('happy-face')).toBe('😀')
  })

  test(`Passing "made-up-tag" should throw an error with message ${helpers.ERROR_MESSAGE_EMOJI_NOT_EXISTING}`, () => {
    function test() {
      emojiProvider.getEmojiByTag('made-up-tag')
    }

    expect(test).toThrowError(helpers.ERROR_MESSAGE_EMOJI_NOT_EXISTING)
  })
})

describe('Replace emoticons with emojis in text', () => {
  test('Passing "Hej :D" should return "Hej 😃"', () => {
    expect(emojiProvider.replaceEmoticonWithEmoji('Hej :D')).toBe('Hej 😃')
  })

  test('Passing ":D :D :)" should be replaced with "😃 😃 😊"', () => {
    expect(emojiProvider.replaceEmoticonWithEmoji(':D :D :)')).toBe('😃 😃 😊')
  })

  test('Passing a non-existing emoticon ":G" should not be replaced with an emoji', () => {
    expect(emojiProvider.replaceEmoticonWithEmoji('Hej :G')).toBe('Hej :G')
  })

  test('Passing an empty string should return an empty string', () => {
    expect(emojiProvider.replaceEmoticonWithEmoji('')).toBe('')
  })
})

describe('get emojis that matches text', () => {
  test('get emojis that matches text', () => {
    expect(emojiProvider.getEmojisThatMatchesText('sad')).toEqual(['😢', '😞', '😓', '😿'])
  })

  test('get emojis that matches text', () => {
    expect(emojiProvider.getEmojisThatMatchesText('')).toEqual([])
  })
})
