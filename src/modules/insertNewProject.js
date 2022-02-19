import { handleProjectName } from "..";

function insertNewProject(newProject) {
  const projectList = document.querySelector(".project-list");
  projectList.innerHTML += `<p id=${newProject.projectId} class="project-name">
    <span class="bullet-points">&#9679;</span>
    <span class="project-name-text"> ${newProject.name} </span>
    <i class="bi bi-pencil project-name-btn"></i>
  </p>`;
  const projectNameText = document.querySelectorAll(".project-name-text");

  projectNameText.forEach((item) => {
    item.addEventListener("click", handleProjectName.bind(item));
  });
}

export { insertNewProject };
