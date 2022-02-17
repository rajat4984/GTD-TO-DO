
class makeTodo {

  static myId = 0;

  constructor(title, desc = "",dueDate=newDate) {
    makeTodo.myId += 1;
    this.title = title;
    this.desc = desc;
    this.id = makeTodo.myId;
    this.dueDate = dueDate
  }

  static makeTodo = 0

}


export { makeTodo };
