function deleteTodo(arr) {
  const deleteTodoIcon = document.querySelectorAll(".todo-icons > .bi-trash");
  const handleDeleteIcon = (e) => {
    let elementId =
      e.target.parentNode.previousElementSibling.children[0].children[0].getAttribute(
        "id"
      ); //gives id of clicked todo

      arr.splice(elementId)
      e.target.parentNode.previousElementSibling.parentNode.remove()
  };


  deleteTodoIcon.forEach((item) => {
    item.addEventListener("click", handleDeleteIcon);
  });
}

export { deleteTodo };
