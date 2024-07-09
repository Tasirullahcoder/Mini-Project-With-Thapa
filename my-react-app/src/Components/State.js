import React,{useState} from 'react'

export default function State() {

  let curntime= new Date().toLocaleTimeString()
    const [curtime, setcurtime] = useState(curntime)

    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setcurtime(currentTime);
    }, 1000);
    
  return (
    <>
    <h2>{curtime}
    {intervalId}
    </h2>
      
    </>
  )
}
