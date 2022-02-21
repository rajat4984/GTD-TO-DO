import "./style.css";
import { showTodoModal } from "./modules/showTodoModal";
import { deleteTodo } from "./modules/deleteTodo";
import { showEditModal } from "./modules/ShowEditModal";
import { showProjectModal } from "./modules/showProjectModal";
import { project } from "./modules/makeProject";
import { populateNewArray } from "./modules/populateNewArray";
import { format } from "date-fns";

localStorage.clear();

const newTodoBtn = document.querySelector(".new-todo-btn");
const newProjectIcon = document.querySelector(".new-project-btn");
const projectsArray = [];
const today = new project("Today");
const personal = new project("Personal");
const study = new project("Study");
const todoHeading = document.querySelector(".todo-heading");
const projectNameText = document.querySelectorAll(".project-name-text");
const headingDate = document.querySelector(".todo-heading-date");
const projectNameBtn = document.querySelectorAll(".project-name-btn");
const projectList = document.querySelector(".project-list");

today.addInArray(projectsArray);
personal.addInArray(projectsArray);
study.addInArray(projectsArray);

localStorage.setItem(today.name, JSON.stringify(today.array));
localStorage.setItem(personal.name, JSON.stringify(personal.array));
localStorage.setItem(study.name, JSON.stringify(study.array));

let currentProject = today;
headingDate.textContent = format(new Date(), "dd/MM/yyyy");

// -------------------------------NORMAL FUNCTIONS------------------------------

deleteTodo(currentProject);
showEditModal(currentProject);

// ---------------------HANDLER FUNCTIONS---------------------------------

const handleProjectName = (e) => {
  let element = e.target.parentNode;
  let elementId = Array.from(projectList.children).indexOf(element);
  todoHeading.innerText = projectsArray[elementId].name;
  currentProject = projectsArray[elementId];
  populateNewArray(currentProject);
  headingDate.innerText = format(new Date(), "dd/MM/yyyy");

  deleteTodo(currentProject);
  showEditModal(currentProject);
};

const handleMakeTodo = () => {
  showTodoModal(currentProject);
};

const handleNewProject = () => {
  showProjectModal(projectsArray);
};

const hanldeProjectNameBtn = (e) => {
  let element = e.target.parentNode;
  let elementId = Array.from(projectList.children).indexOf(element);
  projectsArray.splice(elementId, 1);
  element.remove();
};

// --------------------------------EVENT LISTENERS----------------------------------

newTodoBtn.addEventListener("click", handleMakeTodo);
newProjectIcon.addEventListener("click", handleNewProject);
projectNameText.forEach((item) => {
  item.addEventListener("click", handleProjectName.bind(item));
});
projectNameBtn.forEach((icon) => {
  icon.addEventListener("click", hanldeProjectNameBtn.bind(icon));
});

export { handleProjectName, hanldeProjectNameBtn };
