import React from 'react'
import classes from './ListTodo.module.css'
const ListTodo = (props) => {
  return (
    <div className={classes.todo}>
        <ul> 
            {props.addList.map((list,index) => (
                <div>
                    <input type="checkbox" checked={list.checked}></input>
                <li>{list.todo}</li>
                <button onClick={() =>{props.delList(index)}} >Delete</button>
                </div>

            ))}          
                       
        </ul>
        
        
    </div>
  )
}

export default ListTodo