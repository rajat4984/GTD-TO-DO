function deleteTodo(currentProject) {
  let currentArray = currentProject.array;
  const deleteTodoIcon = document.querySelectorAll(".todo-icons > .bi-trash");
  const titleLabel = document.querySelectorAll(".todo-label");

  const removeTodo = (element, elementId) => {
    currentArray.splice(elementId, 1);
    localStorage[currentProject.name] = JSON.stringify(currentArray);
    element.remove();
  };

  const handleDeleteIcon = (e) => {
    //targeting todoList here so that we can updated todoList
    const todoList = document.querySelector(".todo-list");
    let element = e.target.parentNode.previousElementSibling.parentNode; //element on which user clicked
    let elementId = Array.from(todoList.children).indexOf(element); //index of element from todoList on which user clicked
    removeTodo(element, elementId);
  };

  const handleCheck = (e) => {
    const todoList = document.querySelector(".todo-list");
    let element = e.target.parentNode.parentNode.parentNode;
    let elementId = Array.from(todoList.children).indexOf(element);
    removeTodo(element, elementId);
  };

  deleteTodoIcon.forEach((item) => {
    item.addEventListener("click", handleDeleteIcon);
  });

  titleLabel.forEach((item) => {
    item.addEventListener("click", handleCheck);
  });
}

export { deleteTodo };
