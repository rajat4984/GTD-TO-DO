function deleteTodo(currentProject) {
  let currentArray = currentProject.array;
  const deleteTodoIcon = document.querySelectorAll(".todo-icons > .bi-trash");
  const titleLabel = document.querySelectorAll(".todo-title");
  const handleDeleteIcon = (e) => {
    const todoList = document.querySelector(".todo-list");
    let element = e.target.parentNode.previousElementSibling.parentNode;
    let elementId = Array.from(todoList.children).indexOf(element);

    currentArray.splice(elementId, 1);
    element.remove();
  };

  const handleCheck = (e) => {
    const todoList = document.querySelector(".todo-list");
    let element = e.target.parentNode.parentNode.parentNode;
    let elementId = Array.from(todoList.children).indexOf(element);
    currentArray.splice(elementId, 1);
    element.remove();
  };

  deleteTodoIcon.forEach((item) => {
    item.addEventListener("click", handleDeleteIcon);
  });

  titleLabel.forEach((item) => {
    item.addEventListener("click", handleCheck);
  });
}

export { deleteTodo };
