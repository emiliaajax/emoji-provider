import { emojilib } from '../lib/index.js'
import * as testData from './utils.js'

describe('get emoji from tag', () => {
  test('happy-face should return 😀', () => {
    expect(emojilib.getEmojiByTag('happy-face')).toBe('😀')
  })

  test('made-up-tag should throw an error', () => {
    function test() {
      emojilib.getEmojiByTag('made-up-tag')
    }

    expect(test).toThrowError(testData.ERROR_MESSAGE_EMOJI_NOT_EXISTING)
  })
})

describe('replace emoticons in text with emojis', () => {
  test(':D should be replaced with 😃', () => {
    expect(emojilib.replaceEmoticonWithEmoji('Hej :D')).toBe('Hej 😃')
  })

  test(':D :D :) should be replaced with 😃 😃 😊', () => {
    expect(emojilib.replaceEmoticonWithEmoji('Hej :D :D :)')).toBe('Hej 😃 😃 😊')
  })

  test(':G should not be replaced with an emoji', () => {
    expect(emojilib.replaceEmoticonWithEmoji('Hej :G')).toBe('Hej :G')
  })
})

describe('get emojis that matches text', () => {
  test('get emojis that matches text', () => {
    expect(emojilib.getEmojisThatMatchesText('sad')).toEqual(['😢', '😞', '😓', '😿'])
  })

  test('get emojis that matches text', () => {
    expect(emojilib.getEmojisThatMatchesText('')).toEqual([])
  })
})

describe('get emojis from categories', () => {
  test('get emojis from categories', () => {
    expect(emojilib.getEmojiObjectsByCategory('smileysAndEmotion', 'activity')).toEqual(testData.convertCodePointsToEmojis(testData.emojisByCategoriesArray))
  })

  test('get emojis', () => {
    function test () {
      emojilib.getEmojiObjectsByCategory('noneExistingCategory')
    }
    expect(test).toThrowError(testData.ERROR_MESSAGE_NOT_VALID_CATEGORY)
  })
})

test('get all emojis', () => {
  expect(emojilib.getAllEmojisAndTags()).toEqual(testData.convertCodePointsToEmojis(testData.allEmojisArray))
})
