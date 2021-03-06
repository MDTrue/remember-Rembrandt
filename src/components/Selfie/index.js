import React from "react";
import "../../index.css";

const Selfie = props => (
    <div className="card">
      <div className="card__image">
        <img class="card__image--portrait"
        alt={props.id} src={require("../../images/" + props.image)} 
        onClick={()=> props.handleClick(props.id)}
        />
      </div>
      
    </div>
  );


export default Selfie;
