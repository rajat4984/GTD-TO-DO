import { makeTodo } from "./MakeTodo";
import { insertNewTodo } from "./insertNewTodo";
import { format } from "date-fns";
function showTodoModal(arr) {
  const modalContent = document.querySelector(".modal-content");
  const modalTitleInput = document.querySelector(".modal-title-input");
  const modalDescInput = document.querySelector(".modal-desc-input");
  const modalAddTodoBtn = document.querySelector(".modal-todo-btn > button");
  const modalCrossIcon = document.querySelector(".modal-cross-icon");
  const modalDateInput = document.querySelector(".modal-date-input");
  
  modalContent.style.display = "flex";
  let newDate = format(new Date(), "yyyy-MM-dd");
  modalDateInput.setAttribute("min", newDate);
  const handleAddTodo = () => {
    if (modalTitleInput.value === "") return;
    if (modalDateInput.value === "") {
      modalDateInput.value = newDate;
    }
    let newTodo = new makeTodo(
      modalTitleInput.value,
      modalDescInput.value,
      arr.length,                     //to make different ids of todos in different projects
      modalDateInput.value
    );
    arr.push(newTodo);
    insertNewTodo(arr);
    modalTitleInput.value = "";
    modalDescInput.value = "";
    modalDateInput.value = "";
  };

  const handleCrossIcon = () => {
    modalContent.style.display = "none";
    modalAddTodoBtn.removeEventListener("click", handleAddTodo);
  };

  modalAddTodoBtn.addEventListener("click", handleAddTodo);
  modalCrossIcon.addEventListener("click", handleCrossIcon);
}

export { showTodoModal };
