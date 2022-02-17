import "./style.css";
import { showTodoModal } from "./modules/showTodoModal";
import { deleteTodo } from "./modules/deleteTodo";
import { showEditModal } from "./modules/ShowEditModal";
import { format } from "date-fns";

const newTodoBtn = document.querySelector(".new-todo-btn");
const projectNameText = document.querySelectorAll(".project-name-text");
const headingDate = document.querySelector(".todo-heading-date");
const todoHeading = document.querySelector(".todo-heading");

const todayArray = [];

headingDate.textContent = format(new Date(), "dd/MM/yyyy");

// -------------------------------NORMAL FUNCTIONS------------------------------
const showTodayTodo = () => {
  for (let i = 0; i < todayArray.length; i++) {
    const todoList = document.querySelector(".todo-list");
    todoList.innerHTML += ` <div class="todo-item">
        <div class="todo-info">
          <div class="todo-title">
            <input class="todo-checkbox" type="checkbox" id=${todayArray[i].id} />
            <label class="todo-label" for=${todayArray[i].id}> ${todayArray[i].title}</label>
            <div class="todo-due-date">${todayArray[i].dueDate}</div>
          </div>
          <div class="todo-desc">${todayArray[i].desc}</div>
        </div>
        <div class="todo-icons">
          <i class="bi bi-pencil todo-icon-item"></i>
          <i class="bi bi-trash todo-icon-item"></i>
        </div>
      </div>`;
  }

  deleteTodo(todayArray);
  showEditModal(todayArray);
};
showTodayTodo();

// ---------------------HANDLER FUNCTIONS---------------------------------

const handleProjectName = (e) => {
  todoHeading.innerText = e.target.innerText;
  headingDate.innerText = format(new Date(), "dd/MM/yyyy");
};

const handleMakeTodo = () => {
  showTodoModal(todayArray);
};

// --------------------------------EVENT LISTENERS----------------------------------

newTodoBtn.addEventListener("click", handleMakeTodo);
projectNameText.forEach((item) => {
  item.addEventListener("click", handleProjectName);
});
