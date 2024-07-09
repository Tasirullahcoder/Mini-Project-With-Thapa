import React from 'react'
import Netflix from './Netflix'
import Sdata from '../Sdata'

export default function NetflixParent() {
  return (
    <div>
    {Sdata.map((data,index)=>{
    console.log(index)
    return(
    <Netflix
    key={index}
    name={data.name}
    Link={data.Link}
    imgsrc={data.imgsrc}
    title={data.title}

    />
    )
  })}
      
    </div>
  )
}
