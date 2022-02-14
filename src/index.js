import "./style.css";
import { showTodoModal } from "./modules/showTodoModal";
import { showTodayTodo } from "./modules/showTodayTodo";
import {deleteTodo} from "./modules/deleteTodo"
const todayArray = [
  { title: "Make Cake", desc: "I will make cake on sunday", id: 0 },
  { title: "complete project", desc: "I will complete the project", id: 1 },
  { title: "Read books", desc: "Reading the book ", id: 2 },
];

showTodayTodo(todayArray);

const newTodoBtn = document.querySelector(".new-todo-btn");
const projectNameText = document.querySelectorAll(".project-name-text");
const deleteTodoIcon = document.querySelectorAll(".todo-icons > .bi-trash");

deleteTodo(deleteTodoIcon,todayArray) 

// ---------------------HANDLER FUNCTIONS---------------------------------

const handleProjectName = (e) => {
  console.log(`${e.target.innerText}Array`);
};

const callMakeTodo = () => {
  showTodoModal(deleteTodoIcon,todayArray);
  console.log(deleteTodoIcon);
};

// --------------------------------EVENT LISTENERS----------------------------------

newTodoBtn.addEventListener("click", callMakeTodo);
projectNameText.forEach((item) => {
  item.addEventListener("click", handleProjectName);
});

