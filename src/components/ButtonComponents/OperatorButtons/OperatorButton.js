import React from "react";

const OperatorButton = (props) => {
  return (
    
    <div className = "op_btns">
      <button>
      <span>
      {props.button.value}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      </span>
      </button>
    
    </div>
   
  );
};


export default OperatorButton;

