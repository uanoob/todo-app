import { elements } from './service';

export const getItemInput = () => {
  return {
    title: elements.taskInput.value,
    priority: elements.formGroup.elements.customRadio.value,
  };
};

export const clearInput = () => {
  elements.taskInput.value = '';
};

export const clearList = () => {
  elements.taskList.innerHTML = '';
};

export const deleteItem = id => {
  const item = document.querySelector(`[data-itemid=${id}]`);
  if (item) {
    item.parentElement.removeChild(item);
  }
};

export const showError = () => {
  elements.taskInput.classList.add('is-invalid');
  setTimeout(() => {
    elements.taskInput.classList.remove('is-invalid');
  }, 2000);
};

export const renderItem = item => {
  const markup = `
      <div class="form-group task__item" data-itemid=${item.id}>
        <div class="input-group mb-3">
          <input type="text" class="form-control border-${item.priority}" value="${item.title}" disabled>
          <div class="input-group-append">
            <span class="input-group-text">
              <a href="#">
                <i class="fas fa-trash-alt  task__item-delete"></i>
              </a>
            </span>
          </div>
        </div>
      </div>`;
  elements.taskList.insertAdjacentHTML('beforeend', markup);
};
