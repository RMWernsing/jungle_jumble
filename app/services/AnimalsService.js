import { AppState } from "../AppState.js"


class AnimalService {


  setActiveAnimalCard(animalId) {
    const animals = AppState.animals

    const foundAnimal = animals.find(animal => animal.id == animalId)

    console.log('found animal with id', foundAnimal);


    AppState.activeAnimal = foundAnimal


  }



}




export const animalService = new AnimalService()