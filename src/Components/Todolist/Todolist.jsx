import React from 'react'
import './Todolist.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Todolist = () => {
  return (
    <div className='tododiv'>
      <h1 className="heading text-4xl font-extrabold">To Do List</h1>
      <div className="todoform rounded-2xl shadow-xl p-2 mx-2 my-2">
        <form action="" className='flex justify-between items-center my-2 mx-2'>
          <input type="text" className='rounded-l-xl px-4' placeholder='Add a new task' />
          <button className='addbutton px-5'>Add</button>
        </form>
      </div>

    </div>
  )
}

export default Todolist