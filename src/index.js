import Model from './models/model';
import View from './views/view';
import Controller from './controller/controller';

export default class App {
  constructor() {
    const model = new Model();
    const view = new View();
    this.controller = new Controller(model, view);
  }
  init() {
    console.log('App started...');
  }
}

const app = new App();

window.addEventListener('load', () => app.init());
