import React, { useState } from 'react'



function ChildComponent({val,onIncrementt}){
    return (
        <div>
            <p>value: {val}</p>
            <button onClick={onIncrementt}>+</button>
        </div>
    )
}

export default function ParentComponent() {
    
    const [val,setVal]=useState(0);
    
    const handleChange=()=>{
        setVal(val+1);
    }
    
    return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent val={val} onIncrementt={handleChange}/>
    </div>
  )
}
