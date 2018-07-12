export const elements = {
  taskInput: document.querySelector('.task__field'),
  formGroup: document.querySelector('.form__group'),
  taskList: document.querySelector('.task__list'),
  addBtn: document.querySelector('.add__btn'),
};

export const selectors = {
  deleteBtn: 'task__item-delete',
};

export const persistData = data => {
  localStorage.setItem('tasks', JSON.stringify(data));
};

export const readStorage = () => {
  const storage = JSON.parse(localStorage.getItem('tasks'));
  // Restoring tasks from Local Storage
  if (storage) {
    return storage;
  }
};
