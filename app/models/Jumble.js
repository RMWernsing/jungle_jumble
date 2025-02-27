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
                <p>🐔</p>
                <p>Jumble</p>
                <hr>
              </div>
    `
  }
}