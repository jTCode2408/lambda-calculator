import React, {useState} from "react";
import NumberButton from "./NumberButton"
import {numbers} from "../../../data";


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  // console.log(numberButtons);

  const numberArray = numberState.map(e => (
          <NumberButton 
          key={e} 
          className={e}
          value = {e}
          numDisplay = {props.numDisplay}/>

        ));
        
     /* STEP 3 - Use .map() to iterate over your array data and return a button
//        component matching the name on the provided file. Pass
//       //  it any props needed by the child component*/
 
   
return (<div className = "number_container">
{numberArray}
  
</div>
)
  };

export default Numbers;



