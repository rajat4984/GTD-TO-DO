import {makeTodo} from './modules/MakeTodo'
import './style.css'
import insertTodoDom from './modules/insertTodoDom'

const newTodoBtn =  document.querySelector(".new-todo-btn")
const todayArray = []


const  callMakeTodo = ()=>{
    let newTodo = new makeTodo("rajat")
    todayArray.push(newTodo)      
    insertTodoDom(newTodo)
    console.log(todayArray)
}


newTodoBtn.addEventListener("click",callMakeTodo)