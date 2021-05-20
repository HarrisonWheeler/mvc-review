import ItemController from "./Controllers/ItemController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  itemController = new ItemController()
}

window["app"] = new App();
