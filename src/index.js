import List from './List';
import * as listView from './listView';

import { elements, selectors, persistData, readStorage } from './service';

/** Global state of the app
 * - List object
 */
const state = {};

/**
 * LIST CONTROLLER
 */
const listCtrl = () => {
  // Get item input from view
  const item = listView.getItemInput();
  // Validate
  if (item.title === '') {
    // Show error
    listView.showError();
  } else {
    // Add item to the state
    state.list.addItem(item.title, item.priority);
    // Set data to Local Storage
    persistData(state.list.items);
    // Prepare UI for changes
    listView.clearInput();
    listView.clearList();
    // Add items to UI
    state.list.items.forEach(item => {
      listView.renderItem(item);
    });
  }
};

// Handle Event Listeners for ADD item
elements.addBtn.addEventListener('click', e => {
  listCtrl();
  e.preventDefault();
});

// Handle Event Listeners for DELETE item
elements.taskList.addEventListener('click', e => {
  // Get item id from data-itemid
  const id = e.target.closest('.task__item').dataset.itemid;
  // Handle delete button
  if (e.target.classList.contains(selectors.deleteBtn)) {
    // Delete item from state
    state.list.deleteItem(id);
    // Set data to Local Storage
    persistData(state.list.items);
    // Delete item from UI
    listView.deleteItem(id);
  }
  e.preventDefault();
});

const init = () => {
  // Create new list
  state.list = new List();
  // Restore data from Local Storage
  const data = readStorage();
  if (data) {
    state.list.items = data;
    // Add items to UI
    state.list.items.forEach(item => {
      listView.renderItem(item);
    });
  }
};

// Initial HTML document has been completely loaded and parsed
window.addEventListener('DOMContentLoaded', init());
