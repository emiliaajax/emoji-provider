import { UnicodeConverter } from '../lib/UnicodeConverter.js';
const converter = new UnicodeConverter()
import { Helper } from './Helper.js'
const helper = new Helper()

describe("Convert array property emoji from unicode representation to image representation", () => {
  test("Passing [{tag: 'happy-face', emoji: ['0x1F600']}] should return [{tag: 'happy-face', emoji: '😀'}]", () => {
    expect(converter.convertUnicodesToEmojis([{tag: 'happy-face', emoji: ['0x1F600']}])).toEqual([{tag: 'happy-face', emoji: '😀'}])
  })

  test("Passing 'invalid-input' should throw an error", () => {
    function test() {
      converter.convertUnicodesToEmojis('invalid-input')
    }

    expect(test).toThrowError(helper.ERROR_MESSAGE_INVALID_ARGUMENT)
  })

  test("Passing '[{tag: 'happy-face', emoticon: ':D'}]' should throw an error", () => {
    function test() {
      converter.convertUnicodesToEmojis([{tag: 'happy-face', emoticon: ':D'}])
    }

    expect(test).toThrowError(helper.ERROR_MESSAGE_INVALID_ARGUMENT)
  })
})
