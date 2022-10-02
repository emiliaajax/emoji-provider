import './message-form.js'
import { emojiProvider } from '../../lib/index.js'

const template = document.createElement('template')
template.innerHTML = `
<div id='messageBoard'>
  <div id='messageOutput'></div>
  <message-form />
</div>

<style>
  #messageBoard {
    display: grid;
    grid-template-rows: auto;
  }
  #messageOutput {
    background-color: white;
    width: 400px;
    height: 280px;
    border-radius: 10px 10px 0px 0px; 
    grid-column: 1/4;
    /* grid-row: 1/2; */
    padding: 20px;
    overflow: scroll;
    margin: 0 auto;
    margin-top: 20px;
  }
  #messageOutput p {
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
  message-form {
    grid-column: 2/3;
    grid-row: 3/4;
  }
</style>
`

customElements.define('message-board',
  class extends HTMLElement {
    #messageOutput
    #messageForm

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#messageForm = this.shadowRoot.querySelector('message-form')
      this.#messageOutput = this.shadowRoot.querySelector('#messageOutput')
      this.#messageForm.addEventListener('messageSent', event => this.#addMessageToBoard(event.detail.message))
    }

    #addMessageToBoard (message) {
      const pElement = document.createElement('p')
      pElement.textContent = emojiProvider.replaceEmoticonWithEmoji(message)
      this.#messageOutput.appendChild(pElement)
    }
  }
)