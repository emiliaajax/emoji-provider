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

describe('get emojis from categories', () => {
  test('get emojis from categories', () => {
    expect(emojiProvider.getEmojiObjectsByCategory('smileysAndEmotion', 'activity')).toEqual(helpers.emojisByCategoriesArray)
  })

  test('get emojis', () => {
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

describe('get emoji from tag', () => {
  test('happy-face should return 😀', () => {
    expect(emojiProvider.getEmojiByTag('happy-face')).toBe('😀')
  })

  test('made-up-tag should throw an error', () => {
    function test() {
      emojiProvider.getEmojiByTag('made-up-tag')
    }

    expect(test).toThrowError(helpers.ERROR_MESSAGE_EMOJI_NOT_EXISTING)
  })
})

describe('replace emoticons in text with emojis', () => {
  test(':D should be replaced with 😃', () => {
    expect(emojiProvider.replaceEmoticonWithEmoji('Hej :D')).toBe('Hej 😃')
  })

  test(':D :D :) should be replaced with 😃 😃 😊', () => {
    expect(emojiProvider.replaceEmoticonWithEmoji('Hej :D :D :)')).toBe('Hej 😃 😃 😊')
  })

  test(':G should not be replaced with an emoji', () => {
    expect(emojiProvider.replaceEmoticonWithEmoji('Hej :G')).toBe('Hej :G')
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
