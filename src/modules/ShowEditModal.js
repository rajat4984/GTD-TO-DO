import { format } from "date-fns";

function showEditModal(currentProject) {
  let currentArray = currentProject.array
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

    console.log(currentArray)
    editModalTitleInput.value = currentArray[elementId].title;
    editModalDescInput.value = currentArray[elementId].desc;
    editModalDateInput.value = currentArray[elementId].dueDate;

    const handleEditTodo = () => {
      editModal.style.display = "none";
      currentArray[elementId].title = editModalTitleInput.value;
      currentArray[elementId].desc = editModalDescInput.value;
      currentArray[elementId].dueDate = editModalDateInput.value;

      titleLabel[elementId].textContent = currentArray[elementId].title;
      descLabel[elementId].textContent = currentArray[elementId].desc;
      dueDateLabel[elementId].textContent = currentArray[elementId].dueDate;

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
