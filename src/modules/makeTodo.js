class makeTodo {
  static myId = 0;
  constructor(title, desc = "") {
    makeTodo.myId += 1;
    this.title = title;
    this.desc = desc;
    this.id = makeTodo.myId;
  }

  static makeTodo = 0

}


export { makeTodo };
