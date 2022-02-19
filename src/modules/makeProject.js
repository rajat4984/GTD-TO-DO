class project {
  constructor(name) {
    this.name = name;
    this.array = [];
    this.projectId = project.projectId++
  }
  static projectId = 0
  addInArray(projectsArray){
      projectsArray.push(this)
  }
}

export {project}
