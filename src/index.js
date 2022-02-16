import "./style.css";
import { showTodoModal } from "./modules/showTodoModal";
import { deleteTodo } from "./modules/deleteTodo";
import { showEditModal } from "./modules/ShowEditModal";

const todayArray = [
  { title: "Make Cake", desc: "I will make cake on sunday", id: 0 },
  { title: "complete project", desc: "I will complete the project", id: 1 },
  { title: "Read books", desc: "Reading the book ", id: 2 },
];

const newTodoBtn = document.querySelector(".new-todo-btn");
const projectNameText = document.querySelectorAll(".project-name-text");

// -------------------------------NORMAL FUNCTIONS------------------------------
const showTodayTodo = () => {
  for (let i = 0; i < todayArray.length; i++) {
    const todoList = document.querySelector(".todo-list");
    todoList.innerHTML += ` <div class="todo-item">
        <div class="todo-info">
          <div class="todo-title">
            <input class="todo-checkbox" type="checkbox" id=${todayArray[i].id} />
            <label class="todo-label" for=${todayArray[i].id}> ${todayArray[i].title}</label>
          </div>
          <div class="todo-desc">${todayArray[i].desc}</div>
        </div>
        <div class="todo-icons">
          <i class="bi bi-pencil todo-icon-item"></i>
          <i class="bi bi-calendar-check todo-icon-item"></i>
          <i class="bi bi-trash todo-icon-item"></i>
        </div>
      </div>`;
  }
  
  const deleteTodoIcon = document.querySelectorAll(".todo-icons > .bi-trash");
  const editTodoIcon = document.querySelectorAll(".todo-icons > .bi-pencil");
  deleteTodo(deleteTodoIcon, todayArray);
  showEditModal(editTodoIcon, todayArray);
};
showTodayTodo();

// ---------------------HANDLER FUNCTIONS---------------------------------

const handleProjectName = (e) => {
  console.log(`${e.target.innerText}Array`);
};

const handleMakeTodo = () => {
  showTodoModal(todayArray);
};

// --------------------------------EVENT LISTENERS----------------------------------

newTodoBtn.addEventListener("click", handleMakeTodo);
projectNameText.forEach((item) => {
  item.addEventListener("click", handleProjectName);
});
