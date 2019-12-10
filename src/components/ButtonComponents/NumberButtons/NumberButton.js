import React from "react";



const NumberButton = props => {
  
  return (
    <button>
    <span>
      {props.numbers}
      
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </span>
    </button>
    
  );
};

export default NumberButton;