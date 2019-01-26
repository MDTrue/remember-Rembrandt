import React from "react";
import "./style.css";

const Selfie = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={require("../../images/" + props.image)} 
        onClick={()=> props.handleClick(props.id)}
        />
      </div>
      
    </div>
  );


export default Selfie;
