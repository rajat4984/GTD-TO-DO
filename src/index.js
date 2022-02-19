import "./style.css";
import { showTodoModal } from "./modules/showTodoModal";
import { deleteTodo } from "./modules/deleteTodo";
import { showEditModal } from "./modules/ShowEditModal";
import { showProjectModal } from "./modules/showProjectModal";
import { project } from "./modules/makeProject";
import { populateNewArray } from "./modules/populateNewArray";
import { format } from "date-fns";

const newTodoBtn = document.querySelector(".new-todo-btn");
const newProjectIcon = document.querySelector(".new-project-btn");
const projectsArray = [];
const today = new project("today");
const personal = new project("personal");
const study = new project("study");
const todoHeading = document.querySelector(".todo-heading");
const projectNameText = document.querySelectorAll(".project-name-text");
const headingDate = document.querySelector(".todo-heading-date");

today.addInArray(projectsArray);
personal.addInArray(projectsArray);
study.addInArray(projectsArray);

let currentArray = today.array;
headingDate.textContent = format(new Date(), "dd/MM/yyyy");

// -------------------------------NORMAL FUNCTIONS------------------------------

deleteTodo(currentArray);
showEditModal(currentArray);

// ---------------------HANDLER FUNCTIONS---------------------------------

const handleProjectName = (e) => {
  console.log(e)
  let elementId = e.target.parentNode.getAttribute("id");
  todoHeading.innerText = projectsArray[elementId].name;
  currentArray = projectsArray[elementId].array;
  console.log(currentArray)
  populateNewArray(currentArray);
  headingDate.innerText = format(new Date(), "dd/MM/yyyy");

  deleteTodo(currentArray);
  showEditModal(currentArray);
};

const handleMakeTodo = () => {
  showTodoModal(currentArray);
};

const handleNewProject = () => {
  showProjectModal(projectsArray);
};

// --------------------------------EVENT LISTENERS----------------------------------

newTodoBtn.addEventListener("click", handleMakeTodo);
newProjectIcon.addEventListener("click", handleNewProject);
projectNameText.forEach((item) => {
  item.addEventListener("click", handleProjectName.bind(item));
});

export { handleProjectName };
