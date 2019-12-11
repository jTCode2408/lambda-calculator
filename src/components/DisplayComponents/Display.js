import React from "react";

// const Display = (props) => {
//   return (
//     <div className="display">{props.number}</div>
//   );
// };


const Display = (props) => {
  return <div className="display">
    {props.numberDisplay}
  </div>;
};

export default Display;