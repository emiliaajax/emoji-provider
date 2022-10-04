import { UnicodeConverter } from '../lib/UnicodeConverter.js';
import * as helpers from './helpers.js'
const converter = new UnicodeConverter()

describe("Convert array property emoji from unicode representation to image representation", () => {
  test("Passing [{tag: 'happy-face', emoji: ['0x1F600']}] should return [{tag: 'happy-face', emoji: '😀'}]", () => {
    expect(converter.convertUnicodesToEmojis([{tag: 'happy-face', emoji: ['0x1F600']}])).toEqual([{tag: 'happy-face', emoji: '😀'}])
  })

  test("Passing 'invalid-input' should throw an error", () => {
    function test() {
      converter.allCodePointsToEmojis('invalid-input')
    }

    expect(test).toThrowError(helpers.ERROR_MESSAGE_INVALID_ARGUMENT)
  })
})
