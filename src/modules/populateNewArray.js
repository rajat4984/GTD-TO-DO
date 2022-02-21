function populateNewArray(currentProject){
  let currentArray = currentProject.array
  
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = "";
  if (currentArray.length === 0) {
    todoList.innerHTML = "";
  } else {
    for (let i = 0; i < currentArray.length; i++) {
      todoList.innerHTML += ` <div class="todo-item">
                <div class="todo-info">
                  <div class="todo-title">
                    <input class="todo-checkbox" type="checkbox" id=${currentArray[i].id} />
                    <label class="todo-label" for=${currentArray[i].id}> ${currentArray[i].title}</label>
                    <div class="todo-due-date">${currentArray[i].dueDate}</div>
                  </div>
                  <div class="todo-desc">${currentArray[i].desc}</div>
                </div>
                <div class="todo-icons">
                  <i class="bi bi-pencil todo-icon-item"></i>
                  <i class="bi bi-trash todo-icon-item"></i>
                </div>
              </div>`;
    }
  }
}

export { populateNewArray };
