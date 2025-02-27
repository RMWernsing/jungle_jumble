import { AppState } from "../AppState.js";
import { animalService } from "../services/AnimalsService.js";

export class AnimalsController {
  constructor() {

    AppState.on('activeAnimal', this.drawActiveAnimal)
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

  setActiveAnimal(animalId) {

    // console.log('this animal has an id of', animalId)
    animalService.setActiveAnimalCard(animalId)


  }

  drawActiveAnimal() {

    const animal = AppState.activeAnimal



    const drawnAnimalElem = document.getElementById('activeAnimal')
    drawnAnimalElem.innerHTML = animal.activeAnimalHTML

  }
}