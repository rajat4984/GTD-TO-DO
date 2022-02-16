function showEditModal(editTodoIcon, arr) {
  const editModal = document.querySelector(".edit-modal-content");
  const editModalTitleInput = document.querySelector(".edit-modal-title-input");
  const editModalDescInput = document.querySelector(".edit-modal-desc-input");
  const editTodoBtn = document.querySelector(".edit-modal-todo-btn > button");
  const editModalCrossIcon = document.querySelector(".edit-modal-cross-icon");
  const titleLabel = document.querySelectorAll(".todo-label");
  const descLabel = document.querySelectorAll(".todo-desc");

  const handleEditIcon = (e) => {
    editModal.style.display = "flex";
    let elementId =
      e.target.parentNode.previousElementSibling.children[0].children[0].getAttribute(
        "id"
      );
    editModalTitleInput.value = arr[elementId].title;
    editModalDescInput.value = arr[elementId].desc;

    console.log(elementId);

    const handleEditTodo = () => {
      editModal.style.display = "none";
      arr[elementId].title = editModalTitleInput.value;
      arr[elementId].desc = editModalDescInput.value;
      titleLabel[elementId].textContent = editModalTitleInput.value;
      descLabel[elementId].textContent = editModalDescInput.value;
      editTodoBtn.removeEventListener("click", handleEditTodo);
      console.log(elementId);
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
