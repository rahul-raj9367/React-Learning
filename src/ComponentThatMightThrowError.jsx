import React, { useState } from 'react'

export default function ComponentThatMightThrowError() {

    const [count,setCount]=useState(0);
    
    if(count>5){
        throw new Error('i crash')
    }
     
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
    
}
