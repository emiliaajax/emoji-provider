import { CodePointConverter } from "../lib/CodePointConverter.js";
const converter = new CodePointConverter()

describe("Convert array property emoji from unicode representation to image representation", () => {
  test("Passing [{tag: 'happy-face', emoji: ['0x1F600']}] should return [{tag: 'happy-face', emoji: '😀'}]", () => {
    expect(converter.allCodePointsToEmojis([{tag: 'happy-face', emoji: ['0x1F600']}])).toEqual([{tag: 'happy-face', emoji: '😀'}])
  })

  test("Passing 'invalid-input' should throw an error", () => {
    function test() {
      converter.allCodePointsToEmojis('invalid-input')
    }

    expect(test).toThrowError('Argument must be an object literal with at least properties "tag" and "emoji" where emoji properties must hold a array of strings')
  })
})
