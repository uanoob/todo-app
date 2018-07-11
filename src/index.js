import List from './List';
import * as listView from './listView';

import { selectors } from './service';

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
  // Add item to the state
  state.list.addItem(item.title, item.priority);
  // Add items to UI
  state.list.items.forEach(item => {
    listView.renderItem(item);
  });
};

// Handle Event Listeners for add button
selectors.addBtn.addEventListener('click', e => {
  listCtrl();
  e.preventDefault();
});
