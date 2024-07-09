import React from 'react'
import "./ToDo_List.css";

export default function TodoCom(props) {
    
  return (
    <>
      <div className='todo_style'>
        <i
         className='fa fa-times'
         aria-hidden='true'
         onClick={()=>{
            props.Deleteitem(props.id)
         }}
        
        />
      <ol><div>
        {props.itemvalue}
        
        
      </div></ol>
      
      
      </div>
    </>
  )
}
