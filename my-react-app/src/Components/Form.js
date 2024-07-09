import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [state, setstate] = useState({
    fname: "",
    pasward: "",
    email: "",
    df:""
  });

  const statehandler = (event) => {
    const { name, value } = event.target; //destructuring
    setstate((preval) => ({ //preval hold fname pasward email
      ...preval,
      [name]: value,
    }));
  };

  // i use above code mean spread operator instead of below code like if else . actually we reduce the code
  // const statehandler = (event) => {
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   setstate((preval) => {
  //     if (name === "fname") {
  //       return {
  //         fname: value,
  //         pasward: preval.pasward,
  //         email: preval.email,
  //       };
  //     } else if(name==='pasward'){
  //       return {
  //         fname: preval.fname,
  //         pasward: value,
  //         email: preval.email
  //       };
  //     }
  //     else if(name==='email'){
  //       return {
  //         fname: preval.fname,
  //         pasward: preval.pasward,
  //         email: value
  //       };
  //     }
  //   });
  // };

  const formsubmethandler = (e) => {
    e.preventDefault();
    alert("submitted");
  };
  return (
    <div className="main_div">
      <form onClick={formsubmethandler}>
        <div>
          <h1 className="h1">
            Hellow {state.fname}
            {state.pasward}{" "}
          </h1>

          <input
            type="text"
            placeholder="Enter your name"
            value={state.fname}
            name="fname"
            onChange={statehandler}
            className="input"
          />

          <input
            type="passward"
            placeholder="Enter your paasward"
            value={state.pasward}
            name="pasward"
            onChange={statehandler}
            className="input"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={state.email}
            name="email"
            onChange={statehandler}
            className="input"
          />
          <br />
          <button className="botton">Click</button>
        </div>
      </form>
    </div>
  );
}

// import React, { useState } from "react";
// import "./Form.css";

// export default function Form() {
//   const [name, setname] = useState("");
//   const [fullname, setfullname] = useState("");
//   const [pasward, setpasward] = useState("");
//   const [fullpasward, setfullpasward] = useState("");

//   const namehandler = (event) => {
//     console.log(event.target.value);
//     setname(event.target.value);
//   };

//   const paswardhandler=(e)=>{
//     setpasward(e.target.value)
//   }

//   const formsubmethandler = (e) => {
//     e.preventDefault();
//     setfullname(name);
//     setfullpasward(pasward)
//   };
//   return (
//     <div className="main_div">
//       <form onClick={formsubmethandler}>
//         <div>
//           <h1 className="h1">Hellow {fullname} and {fullpasward}</h1>

//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={namehandler}
//             className="input"
//           />

// <input
//             type="passward"
//             placeholder="Enter your paasward"
//             value={pasward}
//             onChange={paswardhandler}
//             className="input"
//           />
//           <br />
//           <button className="botton">Click</button>
//         </div>
//       </form>
//     </div>
//   );
// }
