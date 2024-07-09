import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './ToDo.css'


export default function ToDo_Material() {
  const [item, setitem] = useState('')
  const [NewItem, setNewItem] = useState([])

  const NewItemevent=()=>{
    setNewItem((oldval)=>{
      return [item,...oldval]
      
    })
  }

  const Itemevent=(event)=>{
    setitem(event.target.value)
  }

   return (
    <>
        <div className='main_div'>
          <div className='center_div'>
            <br/>
            <h4> ToDo List</h4>
            <br/>
            <input type='text' placeholder='add item' onChange={Itemevent} value={item} />
            <Button className='btn_color' onClick={NewItemevent}>
              <AddIcon/>
            </Button>
            <br/>
            <ol>{NewItem.map((data)=>{
              return <li>{data}</li>
            })}
            </ol>
            <br/>
          </div>
        </div>
      
      </>
    
  )
}
