import { handleProjectName } from "..";
import { hanldeProjectNameBtn } from "..";
function insertNewProject(newProject) {
  const projectList = document.querySelector(".project-list");
  projectList.innerHTML += `<p id=${newProject.projectId} class="project-name">
    <span class="bullet-points">&#9679;</span>
    <span class="project-name-text"> ${newProject.name} </span>
    <i class="bi bi-trash project-name-btn"></i>
  </p>`;
  const projectNameText = document.querySelectorAll(".project-name-text");

  projectNameText.forEach((item) => {
    item.addEventListener("click", handleProjectName.bind(item));
  });

  const projectNameBtn = document.querySelectorAll(".project-name-btn");
  console.log(projectNameBtn)
  projectNameBtn.forEach((icon) => {
    icon.addEventListener("click", hanldeProjectNameBtn.bind(icon));
  });
}

export { insertNewProject };
