import List from './List';
import * as listView from './listView';

import { elements, selectors } from './service';

/** Global state of the app
 * - List object
 */
const state = {};

/**
 * LIST CONTROLLER
 */
const listCtrl = () => {
  // Create new list if there in none yet
  if (!state.list) {
    state.list = new List();
  }
  // Get item input from view
  const item = listView.getItemInput();
  // Validate
  if (item.title === '') {
    // Show error
    listView.showError();
  } else {
    // Add item to the state
    state.list.addItem(item.title, item.priority);
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
    // Delete item from UI
    listView.deleteItem(id);
  }
  e.preventDefault();
});

const init = () => {};

// Initial HTML document has been completely loaded and parsed
window.addEventListener('DOMContentLoaded', init());
