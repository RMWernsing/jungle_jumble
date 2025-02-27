import { AnimalsController } from "./controllers/AnimalsController.js"

class App {

  animalsController = new AnimalsController()

}

window['app'] = new App()


