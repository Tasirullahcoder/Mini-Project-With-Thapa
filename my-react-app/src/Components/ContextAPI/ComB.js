import React,{useState,useEffect} from 'react'
import ComC from './ComC'

export default function ComB() {
  const [count, setcount] = useState(0)
  useEffect(() => {
    alert('submited')
  },[]  )
  
  const counthandler=()=>{
    setcount(count+1)
  }
  return (
    <div>
      {count}
      <button onClick={counthandler}>click me</button>
      <ComC/>
    </div>
  )
}
