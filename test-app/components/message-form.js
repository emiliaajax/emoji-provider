
const template = document.createElement('template')
template.innerHTML = `
  <form id='messageForm' autocomplete='off'>
    <textarea id='message'></textarea>
    <button type='submit'>SEND</button>
  </form>
  <style>
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

    button {
      margin-left: 15px;
      grid-column: 2/3;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      width: 100px;
      height: 40px;
      border: none;
      background-color: #DCDCDC;
    } 
  </style>
`
customElements.define('message-form',
  class extends HTMLElement {
    #messageForm

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      
      this.#messageForm = this.shadowRoot.querySelector('#messageForm')
      this.#messageForm.addEventListener('submit', (event) => this.#onSubmit(event))
    }

    connectedCallback() {
      this.shadowRoot.querySelector('#message').focus()
    }

    #onSubmit(event) {
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('messageSent', { 
        detail: 
          { 
            message: this.shadowRoot.querySelector('#message').value 
          }
        }
      ))
    }
  }
)