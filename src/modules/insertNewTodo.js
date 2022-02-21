import { deleteTodo } from "./deleteTodo";
import { showEditModal } from "./ShowEditModal";
function insertNewTodo(currentProject) {
  let currentArray = currentProject.array 
  const todoList = document.querySelector(".todo-list");
  const el = currentArray[currentArray.length - 1];
  todoList.innerHTML += ` <div class="todo-item">
      <div class="todo-info">
        <div class="todo-title">
          <input class="todo-checkbox" type="checkbox" id=${el.id} />
          <label class="todo-label" for=${el.id}> ${el.title}</label>
          <div class="todo-due-date">${el.dueDate}</div>
        </div>
        <div class="todo-desc">${el.desc}</div>
      </div>
      <div class="todo-icons">
        <i class="bi bi-pencil todo-icon-item"></i>
        <i class="bi bi-trash todo-icon-item"></i>
      </div>
    </div>`;

  deleteTodo(currentProject);
  showEditModal(currentProject);

}

export { insertNewTodo };
