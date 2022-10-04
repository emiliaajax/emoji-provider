import { EmojiProvider } from './EmojiProvider.js'

export const emojiProvider = new EmojiProvider()
console.log(emojiProvider.getEmojisThatMatchesText('sad'))