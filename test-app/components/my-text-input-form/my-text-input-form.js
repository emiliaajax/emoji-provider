/**
 * Defines template.
 */
const template = document.createElement('template')
template.innerHTML = `
  <form id='textInput'>
    <p>Generate emoji by tag:</p>
    <textarea id='input' placeholder='Write a tag here...'></textarea>
    <br>
    <button id='textInputButton'>OK</button>
  </form>
  <style>
    #wrapper {
      font-family: 'Montserrat', sans-serif;
    }
    #categories, #textInput {
      color: #F9F7F5;
    }
    #textInput p {
      font-family: 'Montserrat', sans-serif;
    }
    #textInput textarea {
      padding: 10px;
      padding-top: 10px;
      resize: none;
      display: block;
      height: 20px;
      width: 330px;
      border: none;
      background-color: #222;
      border-bottom: 1px solid white;
      color: white;
      grid-column: 1/2;
      grid-row: 1/3;
      outline: none;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.9rem;
      overflow: scroll;
    }
    button {
      cursor: pointer;
    }
  </style>
`

/*
 * Defines custom element.
 */
customElements.define('my-text-input-form',
  class extends HTMLElement {
    #textInputButton

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#textInputButton = this.shadowRoot.querySelector('#textInputButton')

      this.#textInputButton.addEventListener('click', event => this.#onSubmitText(event))
    }

    /**
     * Sends a custom event that text input is sent
     * @param {Event} event
     */
    #onSubmitText (event) {
      event.preventDefault()
      this.#dispatchTextSentEvent()
      this.#clearTextField()
    }

    /**
     * Dispatches the custom event textInputSent.
     */
    #dispatchTextSentEvent () {
      this.dispatchEvent(new CustomEvent('textInputSent', {
        detail:
          {
            input: this.shadowRoot.querySelector('#input').value
          }
      }))
    }

    #clearTextField () {
      this.shadowRoot.querySelector('#input').value = ''
    }
  }
)
