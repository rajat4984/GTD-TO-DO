import { makeTodo } from "./MakeTodo";
import { insertNewTodo } from "./insertNewTodo";
function showTodoModal(arr) {
  const modalContent = document.querySelector(".modal-content");
  const modalTitleInput = document.querySelector(".modal-title-input");
  const modalDescInput = document.querySelector(".modal-desc-input");
  const modalAddTodoBtn = document.querySelector(".modal-todo-btn > button");
  const modalCrossIcon = document.querySelector(".modal-cross-icon");
  modalContent.style.display = "flex";

  const handleAddTodo = () => {
    let newTodo = new makeTodo(modalTitleInput.value, modalDescInput.value);
    arr.push(newTodo);
    insertNewTodo(arr, newTodo);
    modalTitleInput.value = "";
    modalDescInput.value = "";
  };

  const handleCrossIcon = () => {
    modalContent.style.display = "none";
    modalAddTodoBtn.removeEventListener("click", handleAddTodo);
  };

  modalAddTodoBtn.addEventListener("click", handleAddTodo);
  modalCrossIcon.addEventListener("click", handleCrossIcon);
}

export { showTodoModal };
