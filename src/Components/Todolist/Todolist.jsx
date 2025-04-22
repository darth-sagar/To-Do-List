import React from 'react'
import './Todolist.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Todoitem from '../Todoitems/todoitem'


const Todolist = () => {

  const inputtext = useRef();
  const [todolist , settodolist] = useState(localStorage.getItem("todolist") ? JSON.parse(localStorage.getItem("todolist")) : []);

  function addbutton() {
    const inputvalue= inputtext.current.value.trim();
    
    console.log(inputvalue)
    if (inputvalue.length === 0) {
      alert("Please enter a task")
      return;
    }
    const todotask={
      id:Date.now(),
      task:inputvalue,
      iscompleted:false,
    };
    settodolist([...todolist,todotask]);
    inputtext.current.value = "";
  }
  const deletebutton = (id) => {
    settodolist(todolist.filter((item) => item.id !== id));
  }
  const completebutton = (id) => {
    settodolist(todolist.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          iscompleted: !item.iscompleted,
        };
      }
      return item;
    }));
  }
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
    console.log(todolist);
  },[todolist]);


  return (
    <div className='tododiv'>
      <h1 className="heading text-4xl font-extrabold">To Do List</h1>
      <div className="todoform rounded-2xl shadow-xl p-2 mx-2 my-2">
        <div action="" className='flex justify-between items-center my-2 mx-2'>
          <input ref={inputtext}type="text" className='rounded-l-3xl px-4 pl-6' placeholder='Add a New Task' />
          <button onClick={addbutton} className='addbutton px-5 rounded-r-3xl' type='button'>Add</button>
        </div>
        <div className="entries h-4/5 my-5 rounded-3xl ml-2 mr-2 shadow-xl overflow-y-auto p-3">
          {todolist.map((item , index) => {
            return (
              <Todoitem key={index} task={item.task} id={item.id} iscompleted={item.iscompleted} deletebutton={deletebutton} completebutton={completebutton}/>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Todolist