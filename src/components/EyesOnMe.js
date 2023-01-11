// Code EyesOnMe Component Here
import React from "react";
function EyesOnMe() {
   function focus() {
      console.log('good!')
   }
   function blur() {
      console.log('Hey! Eyes on me!')
   }
   return(
      <button onFocus={focus} onBlur={blur}>
         EyesOnMe</button>
   );
}
export default EyesOnMe;








// import React from "react";
// function EyesOnMe(){
//    function focus(){
//       console.log ('Good!')
//    }
//    function blur(){
//       console.log("Hey! Eyes on me!")
//    }
//    return(
//       <button onFocus={focus} onBlur={blur}>EyesOnMe</button>
//    )
//    }

