import ComB from './ComB'
import React,{createContext} from "react";
const Fname=createContext();
const lname=createContext();

 function ComA() {
    
  return (
    <div>
      <Fname.Provider value={'tasir'}>
        <lname.Provider value={'ullah'}>
           <ComB/>
      </lname.Provider>
      </Fname.Provider>
    </div>
  )
}
export default(ComA)
export {Fname,lname}