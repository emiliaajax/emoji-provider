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
// => 'I love emojis ๐ โค๏ธ'

```

# API
### getEmojis()
Returns a string array with all supported emojis (currently supports emojis up to **Unicode Version 15**).

```js
const emojis = getEmojis()

console.log(emojis)
/* => [
  '๐', '๐', '๐', '๐', '๐', '๐', '๐คฃ',
  '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅฐ',
  '๐', '๐คฉ', '๐', '๐', '๐', '๐', '๐',
  '๐', '๐', '๐คช', '๐', '๐ค', '๐ค', '๐คญ',
  '๐คซ', '๐ค', '๐ค', '๐คจ', '๐', '๐', '๐ถ',
  '๐', '๐', '๐', '๐ฌ', '๐คฅ', '๐', '๐', 
  '๐ช', '๐คค', '๐ด', '๐ท', '๐ค', ... 
]
*/
```

### getEmojisAndTags()
Returns an object array with all supported emojis and corresponding tags (currently supports emojis up to **Unicode Version 15**).

```js
const emojiObjects = getEmojisAndTags()

console.log(emojiObjects)
/* => [
  { tag: 'happy-face', emoji: '๐' }, 
  { tag: 'happy-face-with-big-eyes', emoji: '๐' } ,
  { tag: 'happy-face-with-smiling-eyes', emoji: '๐' },
  { tag: 'beaming-face-with-smiling-eyes', emoji: '๐' },
  { tag: 'laughing', emoji: '๐' },
  { tag: 'happy-sweat', emoji: '๐' },
  { tag: 'rolling-on-the-floor-laughing', emoji: '๐คฃ' },
  { tag: 'face-with-tears-of-joy', emoji: '๐' },
  { tag: 'slightly-smiling-face', emoji: '๐' },
  { tag: 'upside-down-face', emoji: '๐' },
  { tag: 'winking-face', emoji: '๐' },
  { tag: 'smiley-face', emoji: '๐' },
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
  '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅญ', 
  '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅ', '๐', 
  '๐ฅฅ', '๐ฅ', '๐', '๐ฅ', '๐ฅ', '๐ฝ', '๐ถ', '๐ฅ', 
  '๐ฅฌ', '๐ฅฆ', '๐ฅ', '๐', '๐ฅ', '๐ฅ', '๐ฅจ', '๐ฅฏ', 
  '๐ฅ', '๐ง', '๐', '๐', '๐ฅฉ', '๐ฅ', '๐', '๐',
  '๐', '๐ญ', '๐ฅช', '๐ฎ', '๐ฏ', '๐ฅ', '๐ฅ', '๐ณ',
  '๐ฅ', '๐ฒ', '๐ฅฃ', '๐ฅ', '๐ฟ', '๐ง', '๐ฅซ', '๐ฑ',
  '๐', '๐', '๐', '๐', '๐', '๐', '๐?', '๐ข', 
  '๐ฃ', '๐ค', '๐ฅ', '๐ฎ', '๐ก', '๐ฅ', '๐ฅ?', '๐ฅก', 
  '๐ฆ', '๐ง', '๐จ', '๐ฉ', ... 
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
  { tag: 'see-no-evil-monkey', emoji: '๐' },
  { tag: 'hear-no-evil-monkey', emoji: '๐' },
  { tag: 'speak-no-evil-monkey', emoji: '๐' },
  { tag: 'monkey-face', emoji: '๐ต' },
  { tag: 'monkey', emoji: '๐' },
  { tag: 'gorilla', emoji: '๐ฆ' },
  { tag: 'dog-face', emoji: '๐ถ' },
  { tag: 'dog', emoji: '๐' },
  { tag: 'poodle', emoji: '๐ฉ' },
  { ... }
  { tag: 'waiving-hand', emoji: '๐' },
  { tag: 'raised-back-of-hand', emoji: '๐ค' },
  { tag: 'raised-hand', emoji: 'โ' },
  { tag: 'vulcan-salute', emoji: '๐'},
  { tag: 'ok-hand', emoji: '๐' },
  { tag: 'fingers-crossed', emoji: '๐ค' },
  { tag: 'i-love-you-hand-sign', emoji: '๐ค' },
  { tag: 'heavy-metal-hand-sign', emoji: '๐ค' },
  { tag: 'call-me-hand-sign', emoji: '๐ค' },
  { ... }
]
*/
```

### getEmojiByTag(tag)
Returns the emoji as a string.

```js
const emoji = getEmojiByTag(piano)

console.log(emoji)
// => '๐น'
```

### replaceEmoticonsWithEmojis(text)
Returns a new string with emoticons replaced with emojis.

```js
const newText = replaceEmoticonsWithEmojis('Hi! :D How Are you? :)')

console.log(newText)
// => 'Hi! ๐ How Are you? ๐'
```

### getMatchingEmojis(text)
Returns an array with emojis matching input.

```js
const emojis = getMatchingEmojis('sad')

console.log(emojis)
// => [ '๐ข', '๐', '๐', '๐ฟ' ]
```

# Want to contribute?
See [DEVELOPER.md](https://github.com/emiliaajax/emoji-provider/blob/main/DEVELOPER.md) for project information and contribution details.

