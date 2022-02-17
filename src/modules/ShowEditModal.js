import { format } from "date-fns";

function showEditModal(arr) {
  const editTodoIcon = document.querySelectorAll(".todo-icons > .bi-pencil");
  const editModal = document.querySelector(".edit-modal-content");
  const editModalTitleInput = document.querySelector(".edit-modal-title-input");
  const editModalDescInput = document.querySelector(".edit-modal-desc-input");
  const editModalDateInput = document.querySelector(".edit-modal-date-input");
  const editTodoBtn = document.querySelector(".edit-modal-todo-btn > button");
  const editModalCrossIcon = document.querySelector(".edit-modal-cross-icon");
  const titleLabel = document.querySelectorAll(".todo-label");
  const descLabel = document.querySelectorAll(".todo-desc");
  const dueDateLabel = document.querySelectorAll(".todo-due-date");

  let newDate = format(new Date(), "yyyy-MM-dd");
  editModalDateInput.setAttribute("min", newDate);

  const handleEditIcon = (e) => {
    editModal.style.display = "flex";
    let elementId =
      e.target.parentNode.previousElementSibling.children[0].children[0].getAttribute(
        "id"
      );
    editModalTitleInput.value = arr[elementId].title;
    editModalDescInput.value = arr[elementId].desc;
    editModalDateInput.value = arr[elementId].dueDate;

    const handleEditTodo = () => {
      editModal.style.display = "none";
      arr[elementId].title = editModalTitleInput.value;
      arr[elementId].desc = editModalDescInput.value;
      arr[elementId].dueDate = editModalDateInput.value;

      titleLabel[elementId].textContent = editModalTitleInput.value;
      descLabel[elementId].textContent = editModalDescInput.value;
      dueDateLabel[elementId].textContent = editModalDateInput.value;

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
