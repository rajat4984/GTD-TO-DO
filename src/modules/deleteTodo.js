function deleteTodo(arr) {
  const deleteTodoIcon = document.querySelectorAll(".todo-icons > .bi-trash");
  const titleLabel = document.querySelectorAll(".todo-title");

  const handleDeleteIcon = (e) => {
    let element =
      e.target.parentNode.previousElementSibling.children[0].children[0];
    arr.splice(element);
    element.remove();
  };

  const handleCheck = (e) => {
    let element = e.target.parentNode.parentNode.parentNode; //gives id of clicked todo
    arr.splice(element);
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
