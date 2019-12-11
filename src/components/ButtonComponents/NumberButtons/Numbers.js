import React, {useState} from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
  const Numbers = (props) => {
    const [numberState, setNumbers] = useState(numbers);
//   // STEP 2 - add the imported data to state

  //   {/* STEP 3 - Use .map() to iterate over your array data and return a button
//        component matching the name on the provided file. Pass
//        it any props needed by the child component*/} 

//
        return (
          <div class = "number_container">
           {
            numberState.map((button, index) => (
              <NumberButton key={index} numberOutput={button} numArray={props.num} />
            ))
           }
        </div>
        );
      };

      export default Numbers;