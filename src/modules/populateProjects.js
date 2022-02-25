import { handleProjectName } from "..";
import { hanldeProjectNameBtn } from "..";
function populateProjects(projectsArray) {
  const projectList = document.querySelector(".project-list");
  projectList.innerHTML = "";
  for (let i = 0; i < projectsArray.length; i++) {
    if (i === 0) {
      console.log("hello");
      projectList.innerHTML += `<p id=${projectsArray[i].projectId} class="project-name">
            <span class="bullet-points">&#9679;</span>
            <span class="project-name-text"> ${projectsArray[i].name} </span>
            </p>`;
    } else {
      projectList.innerHTML += `<p id=${projectsArray[i].projectId} class="project-name">
        <span class="bullet-points">&#9679;</span>
        <span class="project-name-text"> ${projectsArray[i].name} </span>
          <i class="bi bi-trash project-name-btn"></i>
        </p>`;
    }
  }

  //targeting projectNameText here so that we can updated projectName list
  const projectNameText = document.querySelectorAll(".project-name-text");
  projectNameText.forEach((item) => {
    item.addEventListener("click", handleProjectName.bind(item));
  });


  //targeting projectNameBtn here so that we can updated projectNameBtn list
  const projectNameBtn = document.querySelectorAll(".project-name-btn");
  projectNameBtn.forEach((icon) => {
    icon.addEventListener("click", hanldeProjectNameBtn.bind(icon));
  });
}

export { populateProjects };
