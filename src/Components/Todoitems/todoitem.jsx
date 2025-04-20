import React from 'react'
import './todoitem.css'
import { useState } from 'react';
import checkbox from "../../assets/circle.png"
import deleteicon from "../../assets/delete.png"

const Todoitem = ({task}) => {

  return (

    <div className='todoitemdiv'>
        <div className="todoitem p-2">
            <button onClick={(event)=>{
                event.target.classList.toggle('toggleclass')}} className='checkboxbutton '>

                <img src={checkbox} alt="" className='w-8' />
            </button>
            <p className='text-xl px-1 pb-1 font-medium'>{task}</p>
            <button className='deletebutton mr-3'>
                <img src={deleteicon} alt="" className='w-8'/>
            </button>
        </div>
    </div>
  )
}

export default Todoitem