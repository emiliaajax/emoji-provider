const template = document.createElement('template')
template.innerHTML = `
  <div id="wrapper">
    <form id='categories'>
      <p>Choose a category of emojis: </p>
      <input type="checkbox" id="activity" name="activity" value="activity">
      <label for="activity">Activity</label><br>
      <input type="checkbox" id="animalsAndNature" name="animalsAndNature" value="animalsAndNature">
      <label for="animalsAndNature">Animals & Nature</label><br>
      <input type="checkbox" id="flags" name="flags" value="flags">
      <label for="flags">Flags</label>
      <br>
      <input type="checkbox" id="foodAndDrink" name="foodAndDrink" value="foodAndDrink">
      <label for="foodAndDrink">Food & Drink</label><br>
      <input type="checkbox" id="objects" name="objects" value="objects">
      <label for="objects">Objects</label><br>
      <input type="checkbox" id="peopleAndBody" name="peopleAndBody" value="peopleAndBody">
      <label for="peopleAndBody">People & Body</label>
      <br>
      <input type="checkbox" id="smileysAndEmotion" name="smileysAndEmotion" value="smileysAndEmotion">
      <label for="smileysAndEmotion">Smileys & Emotion</label><br>
      <input type="checkbox" id="symbols" name="symbols" value="symbols">
      <label for="symbols">Symbols</label><br>
      <input type="checkbox" id="travelAndPlaces" name="travelAndPlaces" value="travelAndPlaces">
      <label for="travelAndPlaces">Travel & Places</label>
      <br>
      <input type="checkbox" id="nonExistingCategory" name="nonExistingCategory" value="nonExistingCategory">
      <label for="nonExistingCategory">Invalid option</label>
      <br><br>
      <button id='categoryButton'>OK</button>
    </form>
    <br>
    <hr>
    <form id='textInput'>
      <p>Write letters for getting matching emojis (for example, if you type "sa" you will get all emojis starting with "sa")</p>
      <textarea id='input' placeholder='Type here...'></textarea>
      <br>
      <button id='textInputButton'>OK</button>
    </form>
  </div>
  <style>
    #wrapper {
      font-family: 'Montserrat', sans-serif;
    }
    #categories, #textInput {
      color: #F9F7F5;
    }
    #textInput textarea {
      padding: 20px;
      padding-top: 20px;
      resize: none;
      display: block;
      height: 30px;
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
      cursor: pointer;
    }
  </style>
`

customElements.define('options-form',
  class extends HTMLElement {
    #categoryButton
    #textInputButton
  
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#categoryButton = this.shadowRoot.querySelector('#categoryButton')
      this.#textInputButton = this.shadowRoot.querySelector('#textInputButton')
      this.#categoryButton.addEventListener('click', event => this.#onSubmitCategory(event))
      this.#textInputButton.addEventListener('click', event => this.#onSubmitText(event))
    }

    #onSubmitText(event) {
      event.preventDefault()
      this.dispatchEvent(new CustomEvent('textInputSent', {
        detail:
          {
            input: this.shadowRoot.querySelector('#input').value
          }
        }
      ))
      this.shadowRoot.querySelector('#input').value = ''
    }

    #onSubmitCategory(event) {
      event.preventDefault()
      const chosenCategories = []
      for (const input of this.shadowRoot.querySelectorAll('#categories input')) {
        if (input.checked) {
          chosenCategories.push(input.value)
          input.checked = false
        }
      }
      this.dispatchEvent(new CustomEvent('categorySent', {
        detail:
          {
            categories: chosenCategories
          }
        }
      ))
    }
  }
)