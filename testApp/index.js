import { replaceIt } from '../lib/index.js'

console.log(replaceIt)
const text = replaceIt('hej :D')
console.log(text)
document.querySelector('#main').textContent = text
