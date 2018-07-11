import uniqid from 'uniqid';

export default class List {
  constructor() {
    this.items = [];
  }
  addItem(title, priority) {
    const item = {
      id: uniqid(),
      title,
      priority,
    };
    this.items.push(item);
    return item;
  }
  deleteItem(id) {
    const index = this.items.findIndex(el => {
      return el.id === id;
    });
    this.items.splice(index, 1);
  }
}
