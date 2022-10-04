# emoji-provider
*emoji-provider* adds a simple way of generating emojis for node or browser applications. *emoji-provider* is a zero dependency library.

# Installation

npm install emoji-provider

# API

### getEmojiObjects()
Returns an object array with all emoji objects.

```js
const emojiObjects = getEmojiObjects()

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
  .... } 
*/
```

### getEmojisOnly()
Returns a string array with emojis only.

```js
const emojiObjects = getEmojisOnly()

console.log(emojiObjects)
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

### getEmojiObjectsByCategory(...categories)

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
  , ... ,
  { tag: 'waiving-hand', emoji: '👋' },
  { tag: 'raised-back-of-hand', emoji: '🤚' },
  { tag: 'raised-hand', emoji: '✋' },
  { tag: 'vulcan-salute', emoji: '🖖'},
  { tag: 'ok-hand', emoji: '👌' },
  { tag: 'fingers-crossed', emoji: '🤞' },
  { tag: 'i-love-you-hand-sign', emoji: '🤟' },
  { tag: 'heavy-metal-hand-sign', emoji: '🤘' },
  { tag: 'call-me-hand-sign', emoji: '🤙' },
]
*/
```

### getEmojisOnlyByCategory(...categories)

### getEmojiByTag(tag)

### replaceEmoticonsWithEmojis(text)


