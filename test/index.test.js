import { EmojiProvider } from "../lib/EmojiProvider.js";
import { emojilib } from "../lib/index.js";

describe('Create an instance of EmojiProvider', () => {
  test('emojilib should be an istance of class EmojiProvider', () => {
    expect(emojilib).toBeInstanceOf(EmojiProvider)
  })
})
