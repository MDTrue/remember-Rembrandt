import React from "react";
import "./style.css";

function Selfie(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={require("../../images/" + props.image)} />
      </div>
      
    </div>
  );
}

export default Selfie;
