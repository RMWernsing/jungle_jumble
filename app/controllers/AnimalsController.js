import { AppState } from "../AppState.js";
import { animalService } from "../services/AnimalsService.js";
import { getFormData } from "../utils/FormHandler.js";

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

  drawActiveAnimal() {

    const animal = AppState.activeAnimal



    const drawnAnimalElem = document.getElementById('activeAnimal')
    drawnAnimalElem.innerHTML = animal.activeAnimalHTML


  }
  setActiveAnimal(animalId) {

    // console.log('this animal has an id of', animalId)
    animalService.setActiveAnimalCard(animalId)


  }

  checkJumbleContent() {
    event.preventDefault()

    const animal = AppState.activeAnimal

    const formElem = event.target

    const rawAnimalData = getFormData(formElem)


    console.log(animal, rawAnimalData);
    if (rawAnimalData.content == animal.content) {
      window.alert('CONGRAGULATIONS!!! YOU ARE SMART!!!')
    }

  }


}