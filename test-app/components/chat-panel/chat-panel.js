import '../my-emojis/index.js'

const sendIconImage = (new URL('images/send-icon.png', import.meta.url)).href


const template = document.createElement('template')
template.innerHTML = `
    <form id='chat-panel'>
      <textarea id='message' placeholder='Write a message with emoticons here...'></textarea>
      <button id='send-button' type='submit'>
        <img src='${sendIconImage}' alt='Send'>
      </button>
      <my-emojis></my-emojis>
    </form>
  </div>
  <style>
<style>
    #chat-panel {
      display: grid;
      grid-template-columns: 4fr 1fr;
    }
    #chat-panel {
      display: grid;
      grid-template-columns: 4fr 1fr;
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
      margin-top: -15px;
      margin-left: 15px;
      grid-column: 2/3;
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
      background-color: #aef2ee;
    }
    #send-button:focus {
      outline: none;
      background-color: #aef2ee;
    }
    #send-button img { 
      width: 50px !important;
    }
    #notification-sound {
      margin-left: 15px;
      grid-column: 2/3;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      width: 35px;
      height: 35px;
      margin-top: -50px;
      border: none;
      background-color: rgb(255, 255, 255, 0);
    }
    #notification-sound:hover {
      cursor: pointer;
    }
    #chat-message button img {
      width: 35px;
      display: block;
    }
    #notification-sound img {
      width: 30px !important;
    }
    .hidden {
      display: none !important;
    }
  </style>
`

customElements.define('chat-panel',
  class extends HTMLElement {
    #chatPanel
    #sendButton
    #message
    #emojis

    /**
     * Creates an instance of current type.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#chatPanel = this.shadowRoot.querySelector('#chat-panel')
      this.#sendButton = this.shadowRoot.querySelector('#send-button')
      this.#message = this.shadowRoot.querySelector('#message')
      this.#emojis = this.shadowRoot.querySelector('my-emojis')

      this.#sendButton.addEventListener('click', event => this.#onSubmit(event))
      this.#message.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
          event.preventDefault()
          this.#onSubmit(event)
        }
      })

      this.#emojis.addEventListener('clicked', event => this.#addEmojiToMessage(event))
      this.shadowRoot.querySelector('my-emojis').addEventListener('closed', () => this.#message.focus())
    }

    #onSubmit(event) {
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('messageSent', {
        detail:
          {
            message: this.#message.value
          }
        }
      ))
      this.#message.value = ''
      this.#sendButton.blur()
      this.#message.focus()
    }

    /**
     * Adds the emoji to the message textarea.
     *
     * @param {Event} event The clicked event.
     */
    #addEmojiToMessage(event) {
      this.#message.focus()
      this.#message.value = this.#message.value + event.detail.emojiValue + ' '
    }
  }
)
