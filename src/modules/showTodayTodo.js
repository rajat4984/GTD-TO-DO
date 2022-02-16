import { deleteTodo } from "./deleteTodo";
import { showEditModal } from "./ShowEditModal";
function showTodayTodo(arr){
    for (let i = 0; i < arr.length; i++) {
        const todoList = document.querySelector(".todo-list");
        todoList.innerHTML += ` <div class="todo-item">
          <div class="todo-info">
            <div class="todo-title">
              <input class="todo-checkbox" type="checkbox" id=${arr[i].id} />
              <label class="todo-label" for=${arr[i].id}> ${arr[i].title}</label>
            </div>
            <div class="todo-desc">${arr[i].desc}</div>
          </div>
          <div class="todo-icons">
            <i class="bi bi-pencil todo-icon-item"></i>
            <i class="bi bi-calendar-check todo-icon-item"></i>
            <i class="bi bi-trash todo-icon-item"></i>
          </div>
        </div>`;
    }

    const deleteTodoIcon = document.querySelectorAll(".todo-icons > .bi-trash")
    const editTodoIcon = document.querySelectorAll(".todo-icons > .bi-pencil")
    deleteTodo(deleteTodoIcon,arr)
    showEditModal(editTodoIcon,arr)
}

export {showTodayTodo}