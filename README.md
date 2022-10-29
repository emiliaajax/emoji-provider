# emoji-provider
Adds a simple way of generating emojis to your front-end application. Do you need emojis for a chat application? Maybe you want to convert emoticons to emojis in text? Look no further! Currently supports emojis up to **Unicode Version 15**.

A zero-dependency library.

# Installation

Install with [npm](https://www.npmjs.org/):
```bash
npm install emoji-provider
```

ES6
```js
import { emojiProvider } from 'emoji-provider'
```

# Usage example

```js
import { emojiProvider } from 'emoji-provider'

const text = 'I love emojis :D <3'
const emojiText = emojiProvider.replaceEmoticonsWithEmojis(text)

console.log(emojiText)
// => 'I love emojis 😃 ❤️'

```

# API
### getEmojis()
Returns a string array with all supported emojis (currently supports emojis up to **Unicode Version 15**).

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
Returns an object array with all supported emojis and corresponding tags (currently supports emojis up to **Unicode Version 15**).

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
Returns a string array with emojis of chosen categories.

Allowed input string arguments: 
* activity
* animalsAndNature
* flags
* foodAndDrink
* objects
* peopleAndBody
* smileysAndEmotion
* symbols
* travelAndPlaces

OBS! Arguments are case sensitive and need to be exact.

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

### getEmojisAndTagsByCategory(...categories)
Returns an object array with emojis and tags of chosen categories.

Allowed input string arguments: 
* activity
* animalsAndNature
* flags
* foodAndDrink
* objects
* peopleAndBody
* smileysAndEmotion
* symbols
* travelAndPlaces

OBS! Arguments are case sensitive and need to be exact.

```js
const emojiObjects = getEmojisObjectsByCategory('animalAndNature', 'peopleAndBody')

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
Returns the emoji as a string.

```js
const emoji = getEmojiByTag(piano)

console.log(emoji)
// => '🎹'
```

### replaceEmoticonsWithEmojis(text)
Returns a new string with emoticons replaced with emojis.

```js
const newText = replaceEmoticonsWithEmojis('Hi! :D How Are you? :)')

console.log(newText)
// => 'Hi! 😃 How Are you? 😊'
```

### getMatchingEmojis(text)
Returns an array with emojis matching input.

```js
const emojis = getMatchingEmojis('sad')

console.log(emojis)
// => [ '😢', '😞', '😓', '😿' ]
```

# Want to contribute?
See [DEVELOPER.md](https://github.com/emiliaajax/emoji-provider/blob/main/DEVELOPER.md) for details.

