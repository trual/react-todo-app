function Todo ({todo, toggleCompleted, removeTodo}){
    function handleClick(){
        toggleCompleted(todo.id)
    }

    function handleXclick(){
        removeTodo(todo.id)
    }
    
    return <li> <span className={todo.completed ? "strike" : null } onClick={handleClick}>{todo.task}  </span>
             <span onClick={handleXclick}> X </span></li>
}

export default Todo
