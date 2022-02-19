class makeTodo {
  static myId = 0;

  constructor(title, desc = "", dueDate = newDate) {
    this.title = title;
    this.desc = desc;
    this.id = makeTodo.myId;
    this.dueDate = dueDate;
    makeTodo.myId += 1;
  }
}

export { makeTodo };
