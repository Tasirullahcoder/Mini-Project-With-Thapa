import React, { useState } from "react";
import "./Incre.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import Clock from "react-digital-clock";

export default function Incrment() {
  const [increment, setincrement] = useState(0);

  const incrmenthandler = () => {
    setincrement(increment + 1);
  };

  const decrementhandler = () => {
    if (increment > 0) {
      setincrement(increment - 1);
    } else {
      alert("can not more increment");
    }
  };
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <h1>{increment}</h1>
          <Button variant="outlined" onClick={incrmenthandler}>
            inc
          </Button>

          <Button
            variant="outlined"
            onClick={decrementhandler}
            startIcon={<DeleteIcon />}
          >
            dec
          </Button>
        </div>
      </div>
      
    </div>
  );
}
