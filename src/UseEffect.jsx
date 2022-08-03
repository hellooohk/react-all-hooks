import React,{useState,useEffect} from 'react'
const UseEffect = () => {
 const [flag,setFlag] = useState(false);
//  useEffect(() => {
//     console.log("Use Effect");
//  },[]); Only calls once
 //  useEffect(() => {
//     console.log("Use Effect");
//  }); Calls on every render
useEffect(() => {
    console.log("Use Effect Called");
 },[flag]); //Calls when dependencies changed
  return (
    <div className='container'>
        <h2>useEffect Hook</h2>
        <p>Open Console</p>
        <button onClick={()=> setFlag(!flag)} className='btn btn-primary'>Click me</button>
        <span></span>
    </div>
  )
}

export default UseEffect