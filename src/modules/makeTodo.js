class makeTodo {
  constructor(title, desc = "",id ,dueDate) {
    this.title = title;
    this.desc = desc;
    this.id = id;
    this.dueDate = dueDate;
  }
}

export { makeTodo };
