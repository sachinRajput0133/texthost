
// import { useEffect, useState } from 'react';
// import './App.css';
// // import Box from './components/Box';


// function App() {
// const initialValue = Array(9).fill(null)
//   const [state,setState]=useState(initialValue)
//   console.log(state)
//   const [isXTurn,setIsXTurn]=useState(true)
  
// const handleClick=(index)=>{
//    const newArr=[...state];
//      newArr[index]= isXTurn ? 'X' : 'O';
//      setState(newArr)
//      setIsXTurn(!isXTurn)
// }

// const winner=()=>{
//   const winnerLogic=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
//   ];

//  for (let key of winnerLogic){
//       const [a,b,c]=key
//       if(state[a] !== null && state[a]===state[b] && state[b]===state[c]){
//         return state[a]
//       }
//  }
// // winnerLogic.forEach((e)=>{
// //   const [a,b,c]=e
// //   console.log(e)
// //   if(state[a] !== null && state[a]===state[b] && state[b]===state[c]){
// //     return state[a]
// //    }

// // })
// // for(let i=0; i<winnerLogic.length;i++){
// //      const [a,b,c]=winnerLogic[i]
//     //  if(state[a] !== null && state[a]===state[b] && state[b]===state[c]){
//     //   return state[a]
//     //  }

// // }

// return null
// }

// useEffect(()=>{
//   const isWinner=winner()
//   if(isWinner){
//     alert(`${isWinner} has Won`)

//      setState(initialValue)
//   }
// },[state])
 



//   return (
//   //  <div className="container" style={{display:'flex',flexDirection:'column',height:'100vh',justifyContent:'center',alignItems:'center',margin:'auto'}}>
//   //   <div className="row" style={{display:'flex',flexDirection:'row'}} >
//   //     <Box value={state[0]} onClick={()=>handleClick(0)} />
//   //     <Box value={state[1]} onClick={()=>handleClick(1)}  />
//   //     <Box value={state[2]} onClick={()=>handleClick(2)}  />

//   //   </div>
//   //   <div className="row" style={{display:'flex',flexDirection:'row'}}>
//   //     <Box  value={state[3]} onClick={()=>handleClick(3)}/>
//   //     <Box  value={state[4]} onClick={()=>handleClick(4)}/>
//   //     <Box  value={state[5]} onClick={()=>handleClick(5)}/>
//   //   </div>
    
//   //   <div className="row" style={{display:'flex',flexDirection:'row'}}>
//   //     <Box  value={state[6]} onClick={()=>handleClick(6)}/>
//   //     <Box value={state[7]} onClick={()=>handleClick(7)}/>
//   //     <Box  value={state[8]} onClick={()=>handleClick(8)}/>
//   //   </div>
//   //  </div>
//   );
// }

// export default App;
