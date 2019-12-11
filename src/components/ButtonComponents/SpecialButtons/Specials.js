import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state

  const [specialState] = useState(specials);

  const specialArray = specialState.map(e => ( 
    <SpecialButton key={e}
    className={e}
    value={e}
    specialDisplay = {props.specialDisplay}/>
  ));

  //   const numberArray = numberState.map(e => (
//           <NumberButton key={e} 
//           className={e}
//           value = {e}
//           numDisplay = {props.numDisplay}/>

//         ));
        
return (<div className = "special_container">
 {specialArray}
  
</div>
)
  };

    
 


export default Specials;


        
//      /* STEP 3 - Use .map() to iterate over your array data and return a button
// //        component matching the name on the provided file. Pass
// //       //  it any props needed by the child component*/
 
