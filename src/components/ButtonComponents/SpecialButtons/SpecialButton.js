import React from "react";

const SpecialButton = props => {
  return (
    
<div>

<button className = "special_btns" onClick = {() =>
props.specialDisplay(props.value)}>

  {props.value}

</button>
      

</div>
  );
}

      {/* Display a button element rendering the data being passed down from the parent container on props */}
     

export default SpecialButton;