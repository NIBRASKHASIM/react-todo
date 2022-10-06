import { Fragment, useState } from 'react';
import './App.css';
import  AddTodo  from './components/AddTodo';
import ListTodo from './components/ListTodo';

function App() {
  const [list,setList] = useState([])
  const todoHandler = (task) => {
    setList((prev) => {
      return [...prev,{todo:task,checked:false}]
    })
  }
  const deleteHandler= (pos) => {
    const tList=[...list]
    tList.splice(pos,1)
    setList(tList)
    console.log(tList)
    
  }
  return ( 
    <Fragment>

      <AddTodo addTodo={todoHandler} />
      <ListTodo addList={list} delList={deleteHandler}  />
    </Fragment>
  );
}

export default App;
