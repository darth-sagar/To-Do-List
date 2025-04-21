import React from 'react'
import './Todolist.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Todoitem from '../Todoitems/todoitem'
import calendaricon from "../../assets/calendar.png"
import remindericon from "../../assets/reminder.png"
import flagicon from "../../assets/flag.png"

const Todolist = () => {

  const inputtext = useRef();

  function addbutton() {
    const inputvalue= inputtext.current.value.trim();
    inputtext.current.value = "";
    console.log(inputvalue)
    if (inputvalue.length === 0) {
      alert("Please enter a task")
      return;
    }
  }
  return (
    <div className='tododiv'>
      <h1 className="heading text-4xl font-extrabold">To Do List</h1>
      <div className="todoform rounded-2xl shadow-xl p-2 mx-2 my-2">
        <div action="" className='flex justify-between items-center my-2 mx-2'>
          <input ref={inputtext}type="text" className='rounded-l-3xl px-4 pl-6' placeholder='Add a New Task' />
          {/* <button><img src={flagicon} alt="" className='w-8 bg-white hoverbuttons'/></button>
          <button><img src={calendaricon} alt="" className='w-8 bg-white hoverbuttons'/></button>
          <button><img src={remindericon} alt="" className='w-8 bg-white hoverbuttons'/></button> */}
          <button onClick={addbutton} className='addbutton px-5 rounded-r-3xl' type='button'>Add</button>
        </div>
        <div className="entries h-4/5 my-5 rounded-3xl ml-2 mr-2 shadow-xl overflow-y-auto p-3">
          <Todoitem task={addbutton}/>
        </div>
      </div>

    </div>
  )
}

export default Todolist