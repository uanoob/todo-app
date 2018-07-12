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

export const renderItem = item => {
  const markup = `
      <div class="form-group task__item" data-itemid=${item.id}>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text task__item-edit">
              <a href="#">
                <i class="far fa-edit"></i>
              </a>
            </span>
          </div>
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
