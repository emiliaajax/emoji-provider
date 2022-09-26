import { emojiLib } from '../lib/index.js'

test('get emoji from tag', () => {
  expect(emojiLib.getEmojiByTag('happy-face')).toBe('😀')
})
