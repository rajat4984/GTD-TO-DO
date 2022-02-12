import makeTodo from './modules/MakeTodo'
import './style.css'

const newTodoBtn =  document.querySelector(".new-todo-btn")


const  callMakeTodo = ()=>{
    makeTodo()
}


newTodoBtn.addEventListener("click",callMakeTodo)