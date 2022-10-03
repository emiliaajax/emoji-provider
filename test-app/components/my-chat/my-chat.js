/**
 * The my-chat web component module.
 *
 * @author Emilia Hansson <eh222yn@student.lnu.se>
 * @version 1.0.0
 */

import '../chat-panel/index.js'
import { emojiProvider } from '../../../lib/index.js'

/**
 * Defines template.
 */
const template = document.createElement('template')
template.innerHTML = `
  <div id='chat'>
    <div id='chat-output'></div>
    <chat-panel></chat-panel>
  </div>
  <style>
    #chat {
      width: 500px;
      height: 500px;
      background-color: #333;
      display: grid;
      grid-template-rows: auto;
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
    #chat-output p[left] {
      display: table;
      text-align: left;
      margin-left: 0px;
      margin-right: auto;
    }
    #chat-output p[right] {
      display: table;
      text-align: right;
      margin-right: 0px;
      margin-left: auto;
      background-color: cornflowerblue;
    }
    chat-panel {
      grid-column: 3/4;
      grid-row: 2/3;
    }
  </style>
`

/*
 * Defines custom element.
 */
customElements.define('my-chat',
  class extends HTMLElement {
    #sendButton
    #message
    #chatOutput
    #chatPanel

    /**
     * Creates an instance of current type.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#chatOutput = this.shadowRoot.querySelector('#chat-output')
      this.#chatPanel = this.shadowRoot.querySelector('chat-panel')

      this.#chatPanel.addEventListener('messageSent', event => this.#onSubmit(event.detail.message))
    }

    /**
     * Sends the submitted message to the server over the WebSocket connection.
     *
     * @param {Event} event The click event.
     */
    #onSubmit (message) {
      const pElement = document.createElement('p')
      pElement.textContent = emojiProvider.replaceEmoticonWithEmoji(message)
      this.#chatOutput.appendChild(pElement)
    }
  }
)
