export default function (todo) {
  const todoList = document.querySelector(".todo-list");
    todoList.innerHTML += ` <div class="todo-item">
      <div class="todo-info">
        <div class="todo-title">
          <input class="todo-checkbox" type="checkbox" id=${todo.id} />
          <label class="todo-label" for=${todo.id}> ${todo.title}</label>
        </div>
        <div class="todo-desc">${todo.desc}</div>
      </div>
      <div class="todo-icons">
        <i class="bi bi-pencil todo-icon-item"></i>
        <i class="bi bi-calendar-check todo-icon-item"></i>
        <i class="bi bi-trash todo-icon-item"></i>
      </div>
    </div>`;
  
}
