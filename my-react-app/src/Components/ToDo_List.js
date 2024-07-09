import React, { useState } from "react";
import "./ToDo_List.css";
import "./TodoCom";
import TodoCom from "./TodoCom";
export default function ToDoList() {
  const [inputList, setinputList] = useState("");
  const [itemList, setitemList] = useState([]);

  const ItemHandler = (event) => {
    setinputList(event.target.value);
  };

  const ItemListHandler = () => {
    setitemList((olditem) => {
      return [...olditem, inputList];
    });
    setinputList("");
  };

  const Deleteitem = (id) => {
    console.log("delete item");
    setitemList((olditem)=>{
      return olditem.filter((arrelement,index)=>{
        return index!==id;
      })
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDoList</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={ItemHandler}
          />
          <button className="button" onClick={ItemListHandler}>
            +
          </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {itemList.map((itemvalue, index) => {
              return (
                <TodoCom
                  itemvalue={itemvalue}
                  key={index}
                  id={index}
                  Deleteitem={Deleteitem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
