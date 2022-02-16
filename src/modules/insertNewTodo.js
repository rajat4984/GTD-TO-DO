import { deleteTodo } from "./deleteTodo";

function insertNewTodo(arr) {
  const todoList = document.querySelector(".todo-list");
  const el = arr[arr.length - 1];
  todoList.innerHTML += ` <div class="todo-item">
      <div class="todo-info">
        <div class="todo-title">
          <input class="todo-checkbox" type="checkbox" id=${arr.length - 1} />
          <label class="todo-label" for=${arr.length - 1}> ${el.title}</label>
        </div>
        <div class="todo-desc">${el.desc}</div>
      </div>
      <div class="todo-icons">
        <i class="bi bi-pencil todo-icon-item"></i>
        <i class="bi bi-calendar-check todo-icon-item"></i>
        <i class="bi bi-trash todo-icon-item"></i>
      </div>
    </div>`;

  const deleteTodoIcon = document.querySelectorAll(".todo-icons > .bi-trash");
  deleteTodo(deleteTodoIcon, arr);

}

export { insertNewTodo };