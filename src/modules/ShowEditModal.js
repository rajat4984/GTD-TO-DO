import { format } from "date-fns";
import { populateTodo } from "./populateTodo";
function showEditModal(currentProject) {
  let currentArray = currentProject.array;
  const editTodoIcon = document.querySelectorAll(".todo-icons > .bi-pencil");
  const handleEditIcon = (e) => {
    const editModal = document.querySelector(".edit-modal-content");
    const editModalTitleInput = document.querySelector(
      ".edit-modal-title-input"
    );
    const editModalDescInput = document.querySelector(".edit-modal-desc-input");
    const editModalDateInput = document.querySelector(".edit-modal-date-input");
    const editTodoBtn = document.querySelector(".edit-modal-todo-btn > button");
    const editModalCrossIcon = document.querySelector(".edit-modal-cross-icon");
    const todoList = document.querySelector(".todo-list");

    editModal.style.display = "flex";
    let newDate = format(new Date(), "yyyy-MM-dd");
    editModalDateInput.setAttribute("min", newDate);
    let element = e.target.parentNode.previousElementSibling.parentNode;
    let elementId = Array.from(todoList.children).indexOf(element);

    editModalTitleInput.value = currentArray[elementId].title;
    editModalDescInput.value = currentArray[elementId].desc;
    editModalDateInput.value = currentArray[elementId].dueDate;

    const handleEditTodo = () => {
      editModal.style.display = "none";

      //updating currentArray with edited values
      currentArray[elementId].title = editModalTitleInput.value;
      currentArray[elementId].desc = editModalDescInput.value;
      currentArray[elementId].dueDate = editModalDateInput.value;
      localStorage[currentProject.name] = JSON.stringify(currentArray);

      populateTodo(currentProject);

      editTodoBtn.removeEventListener("click", handleEditTodo);
    };

    const handleCrossIcon = () => {
      editModal.style.display = "none";
      editTodoBtn.removeEventListener("click", handleEditTodo);
    };

    editTodoBtn.addEventListener("click", handleEditTodo);
    editModalCrossIcon.addEventListener("click", handleCrossIcon);
  };

  editTodoIcon.forEach((icon) => {
    icon.addEventListener("click", handleEditIcon);
  });
}

export { showEditModal };
