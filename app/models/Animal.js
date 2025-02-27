import { generateId } from "../utils/GenerateId.js";

export class Animals {



  /**
   * @param {{ emoji: string; name: string; content: string; }} data
   */
  constructor(data) {
    this.id = generateId()
    this.emoji = data.emoji
    this.name = data.name
    this.content = data.content

  }

  get listTemplateHTML() {
    return `
    <div class="d-flex align-items-center ps-2 fs-4">
                <button>
                  start
                </button>
                <p>${this.emoji}</p>
                <p>Jumble</p>
                <hr>
              </div>
    `
  }

  get activeAnimalHTML() {
    return `
     <div class="mt-2">
            <div class="p-3 bg-light">
              <h2>
                🐔 Joeseph
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, non?</p>
            </div>
            <div class="bg-light mt-5 p-2">
              <form>
                <!-- <label for="jumbleContent"></label> -->
                <textarea name="content" id="jumbleContent" placeholder="Start Typing!!!"></textarea>
                <button class="form-button">submit</button>
              </form>
            </div>
          </div>
    `
  }
}