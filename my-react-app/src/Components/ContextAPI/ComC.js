import React from "react";
import ComD from "./ComD";

export default function ComC() {
  return (
    <>
    <ComD/>
    </>
  );
}

// import { Fname, lname } from "./ComA";
// <Fname.Consumer>
// {(myfname) => {
//   return (
//     <lname.Consumer>
//       {(mylname) => {
//         return (
//           <h1>
//             <h1>
//               my name is {myfname} {mylname}
//             </h1>
//           </h1>
//         );
//       }}
//     </lname.Consumer>
//   );
// }}
// </Fname.Consumer>

// {/* here in component c we use create context api but is very dificult when we consume data and make dificult heirarchy */}

