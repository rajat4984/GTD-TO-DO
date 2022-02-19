import { format } from "date-fns";

function showEditModal(arr) {
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
    const titleLabel = document.querySelectorAll(".todo-label");
    const descLabel = document.querySelectorAll(".todo-desc");
    const dueDateLabel = document.querySelectorAll(".todo-due-date");

    let newDate = format(new Date(), "yyyy-MM-dd");
    editModalDateInput.setAttribute("min", newDate);
    const todoList = document.querySelector(".todo-list");
    editModal.style.display = "flex";
    let element = e.target.parentNode.previousElementSibling.parentNode;
    let elementId = Array.from(todoList.children).indexOf(element);

    editModalTitleInput.value = arr[elementId].title;
    editModalDescInput.value = arr[elementId].desc;
    editModalDateInput.value = arr[elementId].dueDate;

    const handleEditTodo = () => {
      editModal.style.display = "none";
      arr[elementId].title = editModalTitleInput.value;
      arr[elementId].desc = editModalDescInput.value;
      arr[elementId].dueDate = editModalDateInput.value;

      titleLabel[elementId].textContent = arr[elementId].title;
      descLabel[elementId].textContent = arr[elementId].desc;
      dueDateLabel[elementId].textContent = arr[elementId].dueDate;

      editTodoBtn.removeEventListener("click", handleEditTodo);
    };
    editTodoBtn.addEventListener("click", handleEditTodo);
    const handleCrossIcon = () => {
      editModal.style.display = "none";
      editTodoBtn.removeEventListener("click", handleEditTodo);
    };

    editModalCrossIcon.addEventListener("click", handleCrossIcon);
  };

  editTodoIcon.forEach((icon) => {
    icon.addEventListener("click", handleEditIcon);
  });
}

export { showEditModal };
