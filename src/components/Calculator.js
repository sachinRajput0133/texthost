// import { useEffect, useState } from "react";
// import "./App.css";
// // import Box from './components/Box';

// function App() {
//   // const [input,setInput]=useState()
//   const [val, setVal] = useState("");

//   const addValueHandel = (e) => {
//     setVal(val.concat(e.target.value));
//   };
//   const handelResult = (e) => {
//     try {
//       setVal(eval(val).toString());
//     } catch (err) {
//       setVal("Error");
//     }
//     // console.log(e.target.value)
   
//   };
//   const clearHandel = () => {
//     setVal("");
//   };
//   const backHandel = () => {
//     setVal(val.slice(0, val.length - 1));
//   };

//   return (
//     <div className="calculator">
//       <input type="text" onChange={(e)=>e.preventDefault()} value={val} />
//       <div className="span">
//         <button value="7"  onClick={addValueHandel}>
//           7
//         </button>
//         <button value="8" onClick={addValueHandel}>
//           8
//         </button>
//         <button value="9" onClick={addValueHandel}>
//           9
//         </button>
//         <button value="-" onClick={addValueHandel}>
//           -
//         </button>
//       </div>
//       <div className="span">
//         <button value="4" onClick={addValueHandel}>
//           4
//         </button>
//         <button value="5" onClick={addValueHandel}>
//           5
//         </button>
//         <button value="6" onClick={addValueHandel}>
//           6
//         </button>
//         <button value="+" onClick={addValueHandel}>
//           +
//         </button>
//       </div>
//       <div className="span">
//         <button value="1" onClick={addValueHandel}>
//           1
//         </button>
//         <button value="2" onClick={addValueHandel}>
//           2
//         </button>
//         <button value="3" onClick={backHandel}>
//           Back
//         </button>
//         <button value="*" onClick={addValueHandel}>
//           *
//         </button>
//       </div>
//       <div className="span">
//         <button value="0" onClick={addValueHandel}>
//           0
//         </button>
//         <button value="/" onClick={addValueHandel}>
//           /
//         </button>
//         <button value="c" onClick={clearHandel}>
//           c
//         </button>
//         <button value="=" onClick={handelResult}>
//           =
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
