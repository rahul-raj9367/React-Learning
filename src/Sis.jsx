import { memo } from "react";
import React from 'react'

 function Sis({val}) {
    console.log('re-render sis');
  return (
    <div>
      <h1>sis: {val}</h1>
    </div>
  )
}

export default memo(Sis)