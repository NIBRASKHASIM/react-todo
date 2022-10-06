import React, { useState } from 'react'
import classes from './AddTodo.module.css'
 const AddTodo = (props) => {

    const [todo,setTodo] = useState ('')

    const todoClickHandler = (event) =>{
        event.preventDefault()
        if (todo.length === 0){           
        }
        else{          
            props.addTodo(todo)
            setTodo('')
        }

    }
    const todoChangeHandler = (event) => {
        setTodo(event.target.value)
        
    }
    
  return (
    <div className={classes.input}>
        <form onSubmit={todoClickHandler} >
        <label htmlFor='username' >Your Task</label>
        <input id="username" type="text" value = {todo} onChange={todoChangeHandler}/>
        <button className={classes.button} type='submit' >Add New</button>
        </form>
    </div>
  )
}
export default AddTodo
