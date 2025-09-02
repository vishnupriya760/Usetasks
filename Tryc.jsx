// import React, { useState } from "react";

// function CapitalizeFirstLetter() {
//   const [text, setText] = useState("");

//   const handleChange = (e) => {
//     let value = e.target.value;
//     if (value.length > 0) {
   
//       value = value.charAt(0).toUpperCase() + value.slice(1);
//     }
//     setText(value);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h3>Capitalize First Letter</h3>
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Type here..."
//       />
//     </div>
//   );
// }