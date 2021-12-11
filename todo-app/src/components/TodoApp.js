import { useState } from "react";
import Todo from "./Todo";


function TodoApp () {

    let initialTodo = {
        id: 0,
        task: "create APP",
        completed: false
    }

    const initialNewTodo = {
        task: "Insert todo"
    }

    const [listOfTodos, setListOfTodos] = useState([initialTodo])
    const [newTodo, setNewTodo] = useState(initialNewTodo)
    const [idCount , setIdCount] = useState(0)

    function handleInputChange(e) {
        setNewTodo({...newTodo, task: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        let insertTodo = {
            id:  idCount + 1 ,
            task: newTodo.task,
            completed: false
        }

        setListOfTodos(
            [...listOfTodos, insertTodo]
        )
        setNewTodo(initialNewTodo)
        setIdCount(idCount + 1)

    }

    function removeTodo(id) {
        setListOfTodos(listOfTodos.filter((todo) => todo.id !== id))
    }

    function toggleCompleted(id) {
        const listToToggle = listOfTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo
            }
        }

        )

        setListOfTodos(listToToggle)
    }

    return <div>
        <ul>
        {listOfTodos.map(todo => (
          <Todo 
          key={todo.id} 
          todo={todo}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
          />
        ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <input value={newTodo.task} onChange={handleInputChange}></input>
            <button>Submit</button>
        </form>
    </div>
}

export default TodoApp;


