import React from 'react'
import{FaTimes} from 'react-icons/fa'

export const Task = ({task, ddelete,onToggle}) => {
    return (
        <div  className ={`task ${task.reminder ? 'reminder': ''}`}onClick= {()=> onToggle(task.id)}> 
        <h3 > {task.text} <FaTimes onClick={()=>ddelete(task.id)} style={{color:'red', cursor:'pointer'}}/></h3>
        <p>{task.day}</p>
        </div>
        //`task ${task.reminder ? 'reminder': ''}
    )
}
