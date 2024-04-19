import React, { useState } from 'react'

export default function CallBack({getColor}) {
    const [activecolor,setActivecolor]=useState('');
    const handlechange=(e)=>{
        const {value}=e.target;
        setActivecolor(value);
        getColor(value);
    }
  return (
    <div>
      <input type="text" value={activecolor} onChange={handlechange} />
    </div>
  )
}
