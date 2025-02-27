import { AppState } from "../AppState.js";

export class AnimalsController {
  constructor() {
    console.log("controller works!!!");
    this.drawAnimalList()

  }

  drawAnimalList() {
    const animalCards = AppState.animals

    let animalCardContent = ''

    animalCards.forEach(animalCard => animalCardContent += animalCard.listTemplateHTML)

    const animalListElem = document.getElementById('animalList')
    animalListElem.innerHTML = animalCardContent
  }

}