import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="wrapper">
      <h1>Employee Tracker</h1>
      {props.children}
    </div>
  );
}

export default Wrapper;
