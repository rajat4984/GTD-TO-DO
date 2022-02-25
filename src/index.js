import "./style.css";
import { showTodoModal } from "./modules/showTodoModal";
import { deleteTodo } from "./modules/deleteTodo";
import { showEditModal } from "./modules/ShowEditModal";
import { showProjectModal } from "./modules/showProjectModal";
import { project } from "./modules/makeProject";
import { format } from "date-fns";
import { populateTodo } from "./modules/populateTodo";
import { populateProjects } from "./modules/populateProjects";

const newTodoBtn = document.querySelector(".new-todo-btn");
const newProjectIcon = document.querySelector(".new-project-btn");
const todoHeading = document.querySelector(".todo-heading");
const projectNameText = document.querySelectorAll(".project-name-text");
const headingDate = document.querySelector(".todo-heading-date");
const projectNameBtn = document.querySelectorAll(".project-name-btn");
const projectList = document.querySelector(".project-list");

//today array
let projectsArray = [];
const today = new project("Today", projectsArray.length);
today.addInArray(projectsArray);

// localStorage.clear();

// if array not found in localstorage only then make the array
if (!localStorage.getItem("Today")) {
  localStorage.setItem(today.name, JSON.stringify(today.array));
}
if (!localStorage.getItem("projectsArray")) {
  localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

//getting previous projectsArray from localstorage
let localProjectsArray = JSON.parse(localStorage.getItem("projectsArray"));
projectsArray = localProjectsArray;

let currentProject = today;
let retrievedData = localStorage.getItem(currentProject.name);
currentProject.array = JSON.parse(retrievedData);
headingDate.textContent = format(new Date(), "dd/MM/yyyy");

// -------------------------------NORMAL FUNCTIONS------------------------------
populateTodo(currentProject);
deleteTodo(currentProject);
showEditModal(currentProject);

// ---------------------HANDLER FUNCTIONS---------------------------------

//changes project on click
const handleProjectName = (e) => {
  let element = e.target.parentNode;
  let elementId = Array.from(projectList.children).indexOf(element);
  todoHeading.innerText = projectsArray[elementId].name;
  currentProject = projectsArray[elementId];

  //retrieving previous todos from localstorage
  let retrievedData = localStorage.getItem(currentProject.name);
  currentProject.array = JSON.parse(retrievedData);

  headingDate.innerText = format(new Date(), "dd/MM/yyyy");
  populateTodo(currentProject);
  deleteTodo(currentProject);
  showEditModal(currentProject);
};

const handleMakeTodo = () => {
  showTodoModal(currentProject);
};

const handleNewProject = () => {
  showProjectModal(projectsArray);
};

// deletes project onCLick on trash button
const hanldeProjectNameBtn = (e) => {
  let clickedProject = e.target.parentNode;
  let projectId = Array.from(projectList.children).indexOf(clickedProject);
  let projectDeleted = projectsArray[projectId];
  projectsArray.splice(projectId, 1);
  localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
  localStorage.removeItem(projectDeleted.name);
  populateProjects(projectsArray);
};

populateProjects(projectsArray);

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
