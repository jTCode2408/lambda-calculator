import React from "react";



const NumberButton = props => {
  
   return (

    <div>
   <button className = "btn_number" onClick = {()=> props.numDisplay(props.value)}>
     
      {props.value};
      
      
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      </button>
   </div>
    
  );
};

export default NumberButton;