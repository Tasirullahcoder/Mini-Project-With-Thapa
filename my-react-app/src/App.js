import "./App.css";
import Miniproject from "./Components/Miniproject";
import NetflixParent from "./Components/NetflixParent";
import State from "./Components/State";
import Form from "./Components/Form";
import ToDo_List from "./Components/ToDo_List";
import Incrment from "./Components/Incrment";
import ToDo_Material from "./Components/material_ui/ToDo_Material";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import ComA from "./Components/ContextAPI/ComA";

function App() {
  return (
    <div className="App">
     

      {/* <h1>increment decrement counter</h1>\
      <h1>using redux</h1> */}

      <Miniproject/>
      <NetflixParent />
      {/* <State /> */}
      {/* <Form/> */}
      {/* <ToDo_List/> */}
      {/* <Incrment/> */}
      {/* <ToDo_Material/> */}
{/* 
      <button className="btn btn-success">kleifihe</button>
      <div className="text-capitalize mt-20">hellow  word</div> */}
      {/* <ComA/> */}
    </div>
  );
}

export default App;
;
