import { selectors } from './service';

export const getItemInput = () => {
  return {
    title: selectors.taskInput.value,
    priority: selectors.formGroup.elements.customRadio.value,
  };
};

export const renderItem = item => {
  const markup = `
      <div class="form-group task__item">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text task__item-edit">
              <a href="#">
                <i class="far fa-edit"></i>
              </a>
            </span>
          </div>
          <input type="text" class="form-control border-success" value="${item.title}" disabled>
          <div class="input-group-append">
            <span class="input-group-text task__item-delete">
              <a href="#">
                <i class="fas fa-trash-alt"></i>
              </a>
            </span>
          </div>
        </div>
      </div>`;
  selectors.taskList.insertAdjacentHTML('beforeend', markup);
};

// export const deleteItem = id => {
//   const item = document.querySelector(`[data-itemid=${id}]`);
//   if (item) {
//     item.parentElement.removeChild(item);
//   }
// };
