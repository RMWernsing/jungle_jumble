import { generateId } from "../utils/GenerateId.js";

export class Animals {


  /**
   * @param {any} data
   */
  constructor(data) {
    this.id = generateId()
    this.emoji = data.emoji
    this.name = data.name
    this.content = data.content

  }
}