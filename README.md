# emoji-provider
*emoji-provider* adds a simple way of generating emojis for node or browser applications. *emoji-provider* is a zero dependency library.

# Installation

Install with [npm](https://www.npmjs.org/):
```bash
npm install emoji-provider
```

ES6
```js
import { emojiProvider } from 'emoji-provider'
```

# API
### getEmojis()
Returns a string array with emojis.

```js
const emojis = getEmojis()

console.log(emojis)
/* => [
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣',
  '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰',
  '😍', '🤩', '😘', '😗', '😚', '😙', '😋',
  '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭',
  '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶',
  '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', 
  '😪', '🤤', '😴', '😷', '🤒', ... 
]
*/
```

### getEmojisAndTags()
Returns an object array with all emojis and tags.

```js
const emojiObjects = getEmojisAndTags()

console.log(emojiObjects)
/* => [
  { tag: 'happy-face', emoji: '😀' }, 
  { tag: 'happy-face-with-big-eyes', emoji: '😃' } ,
  { tag: 'happy-face-with-smiling-eyes', emoji: '😄' },
  { tag: 'beaming-face-with-smiling-eyes', emoji: '😁' },
  { tag: 'laughing', emoji: '😆' },
  { tag: 'happy-sweat', emoji: '😅' },
  { tag: 'rolling-on-the-floor-laughing', emoji: '🤣' },
  { tag: 'face-with-tears-of-joy', emoji: '😂' },
  { tag: 'slightly-smiling-face', emoji: '🙂' },
  { tag: 'upside-down-face', emoji: '🙃' },
  { tag: 'winking-face', emoji: '😉' },
  { tag: 'smiley-face', emoji: '😊' },
  { ... } 
*/
```

### getEmojisByCategory(...categories)

```js
const emojis = getEmojisByCategory('foodAndDrink')

console.log(emojis)
/* => [
  '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭', 
  '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', 
  '🥥', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶', '🥒', 
  '🥬', '🥦', '🥜', '🍞', '🥐', '🥖', '🥨', '🥯', 
  '🥞', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟',
  '🍕', '🌭', '🥪', '🌮', '🌯', '🥙', '🥚', '🍳',
  '🥘', '🍲', '🥣', '🥗', '🍿', '🧂', '🥫', '🍱',
  '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', 
  '🍣', '🍤', '🍥', '🍮', '🍡', '🥟', '🥠', '🥡', 
  '🍦', '🍧', '🍨', '🍩', ... 
  ]
*/
```

### getEmojiAndTagsByCategory(...categories)

```js
const emojiObjects = getEmojiObjectsByCategory('animalAndNature', 'peopleAndBody')

console.log(emojiObjects)
/* => [
  { tag: 'see-no-evil-monkey', emoji: '🙈' },
  { tag: 'hear-no-evil-monkey', emoji: '🙉' },
  { tag: 'speak-no-evil-monkey', emoji: '🙊' },
  { tag: 'monkey-face', emoji: '🐵' },
  { tag: 'monkey', emoji: '🐒' },
  { tag: 'gorilla', emoji: '🦍' },
  { tag: 'dog-face', emoji: '🐶' },
  { tag: 'dog', emoji: '🐕' },
  { tag: 'poodle', emoji: '🐩' },
  { ... }
  { tag: 'waiving-hand', emoji: '👋' },
  { tag: 'raised-back-of-hand', emoji: '🤚' },
  { tag: 'raised-hand', emoji: '✋' },
  { tag: 'vulcan-salute', emoji: '🖖'},
  { tag: 'ok-hand', emoji: '👌' },
  { tag: 'fingers-crossed', emoji: '🤞' },
  { tag: 'i-love-you-hand-sign', emoji: '🤟' },
  { tag: 'heavy-metal-hand-sign', emoji: '🤘' },
  { tag: 'call-me-hand-sign', emoji: '🤙' },
  { ... }
]
*/
```

### getEmojiByTag(tag)

```js
const emoji = getEmojiByTag(piano)

console.log(emoji)
// => '🎹'
```

### replaceEmoticonsWithEmojis(text)
```js
const newText = replaceEmoticonsWithEmojis('Hi! :D How Are you? :)')

console.log(newText)
// => 'Hi! 😃 How Are you? 😊'
```

### getEmojisThatMatchesText(text)
```js
const emojis = getEmojisThatMatchesText('sad')

console.log(emojis)
// => [ '😢', '😞', '😓', '😿' ]
```
