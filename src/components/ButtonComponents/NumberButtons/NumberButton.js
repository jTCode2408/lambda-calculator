import React from "react";

      
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
   


const NumberButton = (props) => {
   return (
       <button className="btn_number" onClick = {( ) => (
         props.numArray(props.numberOutput)
       )} >{props.numberOutput}</button>
   );
 };

 export default NumberButton;