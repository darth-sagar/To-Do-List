import React from 'react'
import './Todolist.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Todoitem from '../Todoitems/todoitem'

const Todolist = () => {

  return (
    <div className='tododiv'>
      
      <h1 className="heading text-4xl font-extrabold">To Do List</h1>
      <div className="todoform rounded-2xl shadow-xl p-2 mx-2 my-2">
        <form action="" className='flex justify-between items-center my-2 mx-2'>
          <input type="text" className='rounded-l-3xl px-4' placeholder='Add a new task' />
          <button className='addbutton px-5 rounded-r-3xl'>Add</button>
        </form>

        <div className="entries h-4/5 my-5 rounded-3xl ml-2 mr-2 shadow-xl overflow-y-auto p-3">
          <Todoitem task="Learn Coding"/>
          
        </div>
      </div>

    </div>
  )
}

export default Todolist