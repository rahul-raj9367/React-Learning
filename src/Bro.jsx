import React from 'react'
import { memo } from "react";

function Bro({val}) {
    console.log('re-render bro');
  return (
    <div>
      <h1>Bro : {val}</h1>
    </div>
  )
}


export default memo(Bro)