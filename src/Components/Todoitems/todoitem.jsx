import React from 'react'
import './todoitem.css'
import { useState } from 'react';
import checkbox from "../../assets/circle.png"
import deleteicon from "../../assets/delete.png"
import tickicon from "../../assets/tick.png"

const Todoitem = ({task,id,iscompleted,deletebutton,completebutton}) => {

  return (

    <div className='todoitemdiv'>
        <div className="todoitem p-2">
            <button onClick={()=>{completebutton(id)}} className='checkboxbutton '>
                <img src={iscompleted ? tickicon :checkbox } alt="" className='w-8' />
            </button>
            <p className={`text-xl px-1 pb-1 font-medium ${iscompleted ? "line-through" : ""}`}>{task}</p>
            <button className='deletebutton mr-3'>
                <img src={deleteicon} alt="" className='w-8' onClick={()=>{deletebutton(id)}}/>
            </button>
        </div>
    </div>
  )
}

export default Todoitem