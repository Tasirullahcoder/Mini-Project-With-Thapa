import React from 'react'
import './MiniStyle.css'

export default function Miniproject() {

    const curdate = new Date()
    const currentHour=curdate.getHours()

    console.log("Current hour:", currentHour);

    var greeding=''
    var color=''
    if(currentHour >= 1 && currentHour < 12){
      greeding='GOOD MORNING'
      color='pink'
    } else if(currentHour >= 12 && currentHour < 19){
      greeding='GOOD AFTERNOON'
      color='orange'
    }else{
      greeding='GOODNIGHT'
      color='yellow'
    }
  const style={
    color:color
  }
  
  return (
    <div className='maindiv'>
      <div className='div'><h2 style={style}> HELLOW SIR {`${greeding}  ${currentHour}`}</h2></div>
    </div>
    
  )
  }

