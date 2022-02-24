class project {
  constructor(name,projectId) {
    this.name = name;
    this.array = [];
    this.projectId = projectId
  }
  addInArray(projectsArray){
      projectsArray.push(this)
  }
}

export {project}
