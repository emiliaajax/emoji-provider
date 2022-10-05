/**
 * My-chat web component module.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.0.0
 */

import '../options-form/options-form.js'
import '../text-input-form/text-input-form.js'
import '../my-emojis/index.js'
import { emojiProvider } from '../../../lib/index.js'

const sendIconImage = (new URL('images/send-icon.png', import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
  <div id="wrapper">
    <div id='chat'>
      <div id='chat-output'></div>
      <form id='chat-panel'>
        <textarea id='message' placeholder='Write a message with emoticons here...'></textarea>
        <button id='send-button' type='submit'>
          <img src='${sendIconImage}' alt='Send'>
        </button>
        <my-emojis></my-emojis>
      </form>
    </div>
    <options-form></options-form>
    <table id='emojiTable'>
      <tr>
        <th>Emoji</th>
        <th>Tag</th>
      </tr>
    </table>
    <text-input-form></text-input-form>
    <div id='emojiFromTag'></div>
  </div>
  <style>
    #wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    #chat {
      width: 500px;
      height: 500px;
      background-color: #333;
      display: grid;
      grid-template-rows: auto;
    }
    options-form {
      margin-left: 50px;
    }
    #chat-output {
      background-color: white;
      width: 400px;
      height: 280px;
      border-radius: 10px 10px 0px 0px; 
      grid-column: 1/4;
      grid-row: 1/2;
      padding: 20px;
      overflow: scroll;
      margin: 0 auto;
      margin-top: 20px;
    }
    #chat-output p {
      background-color: #e8e8e8;
      box-shadow: 1px 1px 5px #cdcdcd;
      border-radius: 20px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
      max-width: 250px !important;
      margin-top: 5px;
      margin-bottom: 5px;
      word-break: break-all;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.9rem;
    }
    #chat-panel {
      display: grid;
      grid-template-columns: 4fr 1fr;
      grid-column: 3/4;
      grid-row: 2/3;
    }
    #chat-panel {
      display: grid;
      grid-template-columns: 4fr 1fr;
      grid-column: 3/4;
      grid-row: 2/3;
    }
    #message {
      padding: 20px;
      padding-top: 20px;
      resize: none;
      display: block;
      height: 70px;
      width: 330px;
      border: none;
      grid-column: 1/2;
      grid-row: 1/3;
      outline: none;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.9rem;
      overflow: scroll;
    }
    my-emojis {
      margin-top: -30px;
      margin-left: 15px;
      grid-column: 2/3;
    }
    #emojiFromTag {
      font-size: 2rem;
      margin-left: -300px;
      margin-top: 10px;
    }
    #send-button {
      margin-left: 15px;
      grid-column: 2/3;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      width: 40px;
      height: 40px;
      border: none;
      background-color: rgb(255, 255, 255, 0);
    }
    #send-button:hover {
      cursor: pointer;
      background-color: #333;
    }
    #send-button:focus {
      outline: none;
      background-color: #333;
    }
    #send-button img { 
      width: 50px !important;
    }
    #chat-message button img {
      width: 35px;
      display: block;
    }
    #emojiTable {
      margin-left: 50px;
    }
    #emojiTable th, #emojiTable td {
      text-align: left;
    }
    #emojiTable tr {
      color: white;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .hidden {
      display: none !important;
    }
  </style>
`

customElements.define('my-chat',
  class extends HTMLElement {
    #chatOutput
    #optionsForm
    #sendButton
    #message
    #emojis

    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#chatOutput = this.shadowRoot.querySelector('#chat-output')
      this.#optionsForm = this.shadowRoot.querySelector('options-form')
      this.#sendButton = this.shadowRoot.querySelector('#send-button')
      this.#message = this.shadowRoot.querySelector('#message')
      this.#emojis = this.shadowRoot.querySelector('my-emojis')

      this.#optionsForm.addEventListener('categorySent', (event) => {
        this.#updateEmojisByCategory(event.detail.categories)
        this.#updateTableWithEmojisAndTags(event.detail.categories)
      })

      this.#optionsForm.addEventListener('textInputSent', (event) => {
        this.#updateEmojisByTextInput(event.detail.input)
      })

      this.shadowRoot.querySelector('text-input-form').addEventListener('textInputSent', (event) => {
        this.#generateEmojiFromTag(event.detail.input)
      })

      this.#sendButton.addEventListener('click', event => {
        event.preventDefault()
        this.#onSubmit()
      })

      this.#message.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
          event.preventDefault()
          this.#onSubmit(event)
        }
      })

      this.#emojis.addEventListener('clicked', event => { 
        this.#addEmojiToMessage(event) 
      })

      this.shadowRoot.querySelector('my-emojis').addEventListener('closed', () => {
        this.#message.focus()
      })
    }

    /**
     * Adds the message to the message board.
     */
    #onSubmit () {
      const pElement = document.createElement('p')
      pElement.textContent = emojiProvider.replaceEmoticonsWithEmojis(this.#message.value)
      this.#chatOutput.appendChild(pElement)
      this.#message.value = ''
    }

    /**
     * Adds the emoji to the message textarea when clicked.
     *
     * @param {Event} event The clicked event.
     */
    #addEmojiToMessage(event) {
      this.#message.focus()
      this.#message.value = this.#message.value + event.detail.emojiValue + ' '
    }

    /**
     * Updates the emoji component with emojis of the given categories.
     * 
     * @param {string} categories 
     */
    #updateEmojisByCategory (categories) {
      const emojiArray = []
      for (const category of categories) {
        emojiArray.push(emojiProvider.getEmojisByCategory(category))
      }
      this.#emojis.generateEmojis(emojiArray.flat())
    }

    /**
     * 
     * @param {*} textInput 
     */
    #updateEmojisByTextInput (textInput) {
      this.#emojis.generateEmojis(emojiProvider.getMatchingEmojis(textInput))
    }

    #updateTableWithEmojisAndTags (categories) {
      this.shadowRoot.querySelector('#emojiTable').textContent = ''
      this.#createAndAppendTableHeader()
      for (const emojiObject of this.#getEmojiObjectsArray(categories)) {
        this.#createAndAppendTableRow(emojiObject)
      }
    }

    #getEmojiObjectsArray(categories) {
      const emojiObjectsArray = []
      for (const category of categories) {
        emojiObjectsArray.push(emojiProvider.getEmojisAndTagsByCategory(category))
      }
      return emojiObjectsArray.flat()
    }

    #generateEmojiFromTag(tag) {
      this.shadowRoot.querySelector('#emojiFromTag').textContent = ''
      const emojiContainer = document.createElement('p')
      emojiContainer.textContent = emojiProvider.getEmojiByTag(tag)
      this.shadowRoot.querySelector('#emojiFromTag').appendChild(emojiContainer)
    }

    #createAndAppendTableHeader() {
      const tBodyHeader = document.createElement('tbody')
      const tableRowHeader = document.createElement('tr')
      const emojiColumnHeader = document.createElement('th')
      const tagColumnHeader = document.createElement('th')
      emojiColumnHeader.textContent = 'Emoji'
      tagColumnHeader.textContent = 'Tag'
      tableRowHeader.appendChild(emojiColumnHeader)
      tableRowHeader.appendChild(tagColumnHeader)
      tBodyHeader.appendChild(tableRowHeader)
      this.shadowRoot.querySelector('#emojiTable').appendChild(tBodyHeader)
    }

    #createAndAppendTableRow(emojiObject) {
      const tBody = document.createElement('tbody')
      const tableRow = document.createElement('tr')
      const emojiColumn = document.createElement('td')
      const tagColumn = document.createElement('td')
      emojiColumn.textContent = emojiObject.emoji
      tagColumn.textContent = emojiObject.tag
      tableRow.appendChild(emojiColumn)
      tableRow.appendChild(tagColumn)
      tBody.appendChild(tableRow)
      this.shadowRoot.querySelector('#emojiTable').appendChild(tBody)
    }
  }
)
