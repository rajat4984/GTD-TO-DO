import { project } from "./makeProject";
import { populateProjects } from "./populateProjects";

function showProjectModal(projectsArray) {
  const projectModalContent = document.querySelector(".project-modal-content");
  const modalCrossIcon = document.querySelector(".project-modal-cross-icon");
  const projectTitleInput = document.querySelector(
    ".project-modal-title-input"
  );
  const addProjectBtn = document.querySelector(".project-modal-add-btn");

  projectModalContent.style.display = "flex";

  const handleAddBtn = () => {
    if (projectTitleInput.value === "") return;
    projectModalContent.style.display = "none";
    const newProject = new project(projectTitleInput.value,projectsArray.length);
    newProject.addInArray(projectsArray);
    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
    localStorage.setItem(newProject.name ,JSON.stringify(newProject.array));
    populateProjects(projectsArray)
    projectTitleInput.value = "";
    addProjectBtn.removeEventListener("click", handleAddBtn);
  };

  const handleCrossIcon = () => {
    projectModalContent.style.display = "none";
    projectTitleInput.value = "";
    addProjectBtn.removeEventListener("click", handleAddBtn);
  };

  addProjectBtn.addEventListener("click", handleAddBtn);
  modalCrossIcon.addEventListener("click", handleCrossIcon);
}

export { showProjectModal };
