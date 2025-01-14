import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList(){
    let [todos, setTodos]=useState([{task:"study", id:uuidv4()}]);
    let [newTodo, setNewTodo]=useState("");
    
    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task:newTodo, id:uuidv4()}];
        });
        setNewTodo("");
    };
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.filter((prevTodos)=>prevTodos.id!=id)
        );
    };
    let upperCaseAll=()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                return {...todo, task:todo.task.toUpperCase()};
            })
        );
    };
    let markDone=(id)=>{
            let doneTask=document.getElementById(id);
            console.log(doneTask);
            doneTask.style.textDecoration="line-through";
    };
    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br><hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span id={todo.id}>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <button onClick={()=>markDone(todo.id)}>Done</button>
                        </li>))
                }
            </ul>
            <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
    );
}