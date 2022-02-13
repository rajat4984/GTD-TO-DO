import {makeTodo} from './modules/MakeTodo'
import refreshTodayArray from './modules/insertTodoDom'
import './style.css'

const newTodoBtn =  document.querySelector(".new-todo-btn")
const todayArray = []


const  callMakeTodo = ()=>{
    let newTodo = new makeTodo("rajat","i will do the work")
    todayArray.push(newTodo)      
    refreshTodayArray(newTodo)
    console.log(todayArray)
}


newTodoBtn.addEventListener("click",callMakeTodo)