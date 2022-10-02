const template = document.createElement('template')
template.innerHTML = `
  <form id='messageForm' autocomplete='off'>
    <textarea id='message'></textarea>
    <button id='send' type='submit'>
  </form>
`
customElements.define('message-form',
  class extends HTMLElement {
    #messageForm

    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      
      this.#messageForm = this.shadowRoot.querySelector('#messageForm')
      this.#messageForm.addEventListener('click', (event) => this.#onSubmit(event))
    }

    connectedCallback() {
      this.shadowRoot.querySelector('#message').focus()
    }

    #onSubmit(event) {
      event.preventDefault()
      console.log(this.shadowRoot.querySelector('#message').value)
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