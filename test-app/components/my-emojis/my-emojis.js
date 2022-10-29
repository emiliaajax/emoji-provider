import { emojiProvider } from '../../../lib/index.js'

/**
 * Defines template.
 */
const template = document.createElement('template')
template.innerHTML = `
  <div id='emojis'>
    <button id='emoji-button'>😊</button>
    <div id='emoji-container'></div>
  </div>
  <style>
    #emojis {
      position: absolute;
    }
    #emoji-button {
      width: 40px;
      height: 40px;
      border: none;
      padding-top: 3px;
      border-radius: 2px;
      border-radius: 10px;
      font-size: 2.3rem;
      cursor: pointer;
      background-color: rgb(237, 237, 237, 0);
    }
    #emoji-button:hover {
      background-color: #333;
    }
    #emoji-button:focus {
      background-color: #333;
      outline: none;
    }
    #emoji-container {
      position: absolute;
      width: 210px;
      max-height: 180px;
      left: -145px;
      top: -190px;
      display: flex;
      flex-wrap: wrap;
      background-color: white;
      border-radius: 0px 10px 10px 10px;
      overflow: scroll;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .emoji {
      width: 30px;
      height: 30px;
      text-decoration: none;
      border: black;
      background-color: white;
      cursor: pointer;
    }
    .emoji:hover {
      background-color: #ededed;
    }
    .emoji:focus {
      background-color: #ededed;
      outline: none;
    }
    .hidden {
      display: none !important;
    }
  </style>
`

/*
 * Defines custom element.
 */
customElements.define('my-emojis',
  class extends HTMLElement {
    #emojiContainer
    #emojiButton

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#emojiContainer = this.shadowRoot.querySelector('#emoji-container')
      this.#emojiButton = this.shadowRoot.querySelector('#emoji-button')

      this.#emojiButton.addEventListener('click', event => this.#openOrCloseEmojiContainer(event))
    }

    connectedCallback () {
      this.createAndAppendEmojiButtons(emojiProvider.getEmojis())
      this.#addListenersForEmojiButtons()
    }

    /**
     * @param {string[]} emojiArray
     */
    createAndAppendEmojiButtons (emojiArray) {
      this.#emojiContainer.textContent = ''
      for (const emoji of emojiArray) {
        const emojiButton = document.createElement('button')
        emojiButton.classList.add('emoji')
        emojiButton.textContent = emoji
        this.#emojiContainer.appendChild(emojiButton)
      }
    }

    #addListenersForEmojiButtons () {
      this.shadowRoot.querySelectorAll('.emoji').forEach(emoji => emoji.addEventListener('click', event => {
        event.preventDefault()
        this.#createCustomEventForEmoji(emoji)
      }))
    }

    /**
     * @param {HTMLButtonElement}
     */
    #createCustomEventForEmoji (emoji) {
      this.dispatchEvent(new CustomEvent('clicked',
        {
          detail:
          {
            emojiValue: emoji.textContent
          }
        }
      ))
    }

    /**
     * @param {ClickEvent} event
     */
    #openOrCloseEmojiContainer (event) {
      event.preventDefault()
      if (this.#isContainerClosed()) {
        this.#openContainer()
      } else {
        this.#closeContainer()
        event.target.blur()
        this.dispatchEvent(new CustomEvent('closed'))
      }
    }

    #isContainerClosed () {
      return !this.#emojiContainer.hasAttribute('active')
    }

    #openContainer () {
      this.#emojiContainer.setAttribute('active', '')
      this.#emojiContainer.classList.remove('hidden')
    }

    #closeContainer () {
      this.#emojiContainer.removeAttribute('active')
      this.#emojiContainer.classList.add('hidden')
    }
  }
)
