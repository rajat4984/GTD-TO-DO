import { makeTodo } from "./MakeTodo";
import { populateTodo } from "./populateTodo";
import { format } from "date-fns";

//formats date from yyyy/MM/dd to dd/MM/yyyy
const changeDateFormat = (date) => {
  let splitArray = date.split("-");
  let temp = splitArray[0];
  splitArray[0] = splitArray[2];
  splitArray[2] = temp;
  splitArray = splitArray.toString();
  splitArray = splitArray.replace(/,/g, "-");
  return splitArray;
};
function showTodoModal(currentProject) {
  const modalContent = document.querySelector(".modal-content");
  const modalTitleInput = document.querySelector(".modal-title-input");
  const modalDescInput = document.querySelector(".modal-desc-input");
  const modalAddTodoBtn = document.querySelector(".modal-todo-btn > button");
  const modalCrossIcon = document.querySelector(".modal-cross-icon");
  const modalDateInput = document.querySelector(".modal-date-input");

  // retrieving previous todos from localstorage
  let retrievedData = localStorage.getItem(currentProject.name);
  currentProject.array = JSON.parse(retrievedData);
  let currentArray = currentProject.array;

  modalContent.style.display = "flex";

  let newDate = format(new Date(), "yyyy-MM-dd");
  modalDateInput.setAttribute("min", newDate);
  const handleAddTodo = () => {
    if (modalDateInput.value === "") modalDateInput.value = newDate;

    let dueDate = changeDateFormat(modalDateInput.value);
    if (modalTitleInput.value === "") return;

    let newTodo = new makeTodo(
      modalTitleInput.value,
      modalDescInput.value,
      currentArray.length, //to make different ids of todos in different projects
      dueDate
    );

    //updating currentArray
    currentArray.push(newTodo);
    populateTodo(currentProject);
    localStorage[currentProject.name] = JSON.stringify(currentArray);
    modalTitleInput.value = modalDescInput.value = modalDateInput.value = "";
  };

  const handleCrossIcon = () => {
    modalContent.style.display = "none";
    modalAddTodoBtn.removeEventListener("click", handleAddTodo);
  };

  modalAddTodoBtn.addEventListener("click", handleAddTodo);
  modalCrossIcon.addEventListener("click", handleCrossIcon);
}

export { showTodoModal, changeDateFormat };
