class makeTodo {
  constructor(title, desc = "") {
    makeTodo.myId += 1;
    this.title = title;
    this.desc = desc;
    this.id = makeTodo.myId;
  }

  static myId = 0;
}


export { makeTodo, insertTodo };
