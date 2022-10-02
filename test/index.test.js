import { EmojiProvider } from "../lib/EmojiProvider.js";
import { emojiProvider } from "../lib/index.js";

describe('Create an instance of EmojiProvider', () => {
  test('emojilib should be an istance of class EmojiProvider', () => {
    expect(emojiProvider).toBeInstanceOf(EmojiProvider)
  })
})
