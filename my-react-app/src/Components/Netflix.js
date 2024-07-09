import React from 'react'
import './Netflix.css'
import Image from './Image'


export default function Netflix(props) {
  let x=''
  return (
    <div className='Cards'>
        <div className='Card'>
            <Image imgsrc={props.imgsrc}/>
            <div className='Card__info'>{props.name}
                <span className='Card__category'> </span>
                <h1 className='Card__title'>{props.title}</h1>
                <a href={props.Link}>
                    <button>watch</button>
                    </a>           
            </div>
        </div>
    </div>
  )
}
