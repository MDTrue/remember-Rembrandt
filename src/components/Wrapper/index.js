import React from "react";
import "./style.css";

const Wrapper = props =>(
  <div className="wrapper">{props.children}</div> 
)
// alternate notation...somewhat less efficient
// function Wrapper(props) {
//   return <div className="wrapper">{props.children}</div>;
// }

export default Wrapper;
